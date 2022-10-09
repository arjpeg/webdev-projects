const whiteKeys = document.getElementById('white-keys').children;
const blackKeys = document.getElementById('black-keys').children;

alert("Press any key to begin (required)")

document.body.addEventListener('keypress', (e) => {
    main();
})

const main = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // create Oscillator node
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';

    const distChart = {
        'a': 0,
        'a#': 1,
        'b': 2,
        'c': 3,
        'c#': 4,
        'd': 5,
        'd#': 6,
        'e': 7,
        'f': 8,
        'f#': 9,
        'g': 10,
        'g#': 11,
    }

    const getPitch = (note) => {
        if (note === "a1") {
            return 55;
        }

        let trueNote = note[0];
        let octave = note[1];

        // First get it's distance from the lowest A
        if (note.length === 3) {
            // The note is sharp, so we need to include the sharp
            trueNote += "#";
            octave = note[2];
        }

        let dist = distChart[trueNote] + 12 * (octave-1);
        let result = 55.00 * 2**(dist/12);

        return result;
    }

    oscillator.start();
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime); // value in hertz        
    oscillator.connect(audioCtx.destination);
    oscillator.disconnect();


    [...whiteKeys,...blackKeys].forEach((element) => {
        element.addEventListener('click', (e) => {
            const pitch = getPitch(element.getAttribute('note'));
            oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime); // value in hertz
            
            oscillator.connect(audioCtx.destination);

        })
    })

    document.getElementById('stop').addEventListener('click', (e) => {
        oscillator.disconnect();
    })

    document.addEventListener("keypress", (e) => {
        if (e.key==="s") {
            oscillator.disconnect();
        }
    })
}