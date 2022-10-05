const buttons = [...document.getElementsByClassName('button')];
const replayBtn = document.getElementById('replay');
let buttonPresses = [];

let intervalID = null;

const popBtn = () => {
    // Check if buttonPresses is empty, and if not
    // pop the outer-most button and set its value
    // to active

    if (buttonPresses.length == 0) {
        clearInterval(intervalID);
        return;
    }

    let btn = buttonPresses.shift();

    btn.classList.remove('deactive');
    btn.classList.add('active');
}

const reset = () => {
    buttons.forEach((btn) => {
        btn.classList.add('deactive');
        btn.classList.remove('active');
    })

    buttonPresses = [];
}

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        buttonPresses.push(btn);
    })
})

replayBtn.addEventListener('click', (e) => {
    setTimeout(reset, buttonPresses.length * 250 + 500)
    intervalID = setInterval(() => { popBtn() }, 250);
})