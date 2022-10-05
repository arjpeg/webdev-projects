// Set up your variable here
let counter = 0;

const button = document.getElementById('button')

function increaseCounter() {
  document.getElementById('number').innerText=++counter;
  button.style.left = Math.floor(Math.random() * 100)+'%';
  button.style.top = Math.floor(Math.random() * 100)+'%';
}