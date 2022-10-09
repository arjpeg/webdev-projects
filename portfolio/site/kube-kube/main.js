const cubesCol = document.getElementById('cubes');
const scoreSpan = document.getElementById('score');

let score = 0;
let n = 3;

const clearCubes = () => {
    cubesCol.replaceChildren([]);
}

const genColor = () => {
    let r = 0;
    let g = 0;
    let b = 0;

    while (r + g + b < 140) {
        r = Math.floor(Math.random() * 180 + 60);
        g = Math.floor(Math.random() * 180 + 60);
        b = Math.floor(Math.random() * 180 + 60);
    }

    return [r, g, b];
}

const populateCubes = (n) => {
    // First clear the current cubes
    clearCubes();

    let color = genColor();

    let r = color[0]
    let g = color[1]
    let b = color[2]

    r = (r > 230 ? 230 : r);
    g = (g > 230 ? 230 : g);
    b = (b > 230 ? 230 : b);

    // Add rows
    for (let row = 0; row < n; row++) {
        let newRow = document.createElement('div');
        newRow.classList.add('cube-row');

        // Add the induvidual children
        for (let col = 0; col < n; col++) {
            let cube = document.createElement('div');
            cube.classList.add('cube')

            // Change the cube's color
            cube.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            newRow.appendChild(cube);
        }

        cubesCol.appendChild(newRow);
    }

    // Finally, randomly select a cube and change its color
    let row = Math.floor(Math.random() * n);
    let col = Math.floor(Math.random() * n);

    row = Math.max(1, row);

    let offSet = Math.floor((Math.random() + 1) * 5) * Math.min(Math.ceil((1 / n ** 1.01) * (1 / 4 * n)), 3);


    cubesCol.childNodes[row].childNodes[col].style.backgroundColor = `rgb(${r + offSet}, ${g + offSet}, ${b + offSet})`;

    cubesCol.childNodes[row].childNodes[col].classList.add('isCorrect')
}

const run = () => {
    populateCubes(n);

    let cubes = [...document.getElementsByClassName('cube')]

    cubes.forEach((cube) => {
        cube.addEventListener('click', (e) => {
            if (cube.classList.contains('isCorrect')) {
                score++;
                scoreSpan.innerText = score;

                n = Math.min(10, Math.max(3, Math.ceil(score / 3)))
                run();
            } else {
                score--;
                scoreSpan.innerText = score;
            }
        })
    })
}

run()