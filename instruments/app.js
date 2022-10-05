const content = {
    'flute': "<b>Information about The Flute:</b> The flute is a family of classical music instrument in the woodwind group. Like all woodwinds, flutes are aerophones, meaning they make sound by vibrating a column of air. However, unlike woodwind instruments with reeds, a flute is a reedless wind instrument that produces its sound from the flow of air across an opening. According to the instrument classification of Hornbostel-Sachs, flutes are categorized as edge-blown aerophones. A musician who plays the flute is called a flautist or flutist.",
    'piano': 'uuu'
}

const descriptionElement = document.getElementById('description');

const showDescription = (name) => {
    let contentToFill = content[name];

    descriptionElement.innerHTML = contentToFill;
    descriptionElement.style.animation = "fadetext 0.5s linear 1";
}