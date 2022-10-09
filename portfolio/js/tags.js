const allTags = [...document.getElementsByClassName('tag')]
const tagDescriptionElement = document.getElementById('tag-description')
const tagContent = document.getElementById('tag-content')

const tagDescriptions = {
    h1: {
        code: "<h1>Hello World!</h1>",
        desc: "This tag stands for heading, and is the largest size. It is used to denotate the main ideas (such as the title of this page)!"
    },
    h2: {
        code: "<h2>Subheadings are cool!</h2>",
        desc: "Just like the <h1> tag, this tag stands for a heading, and represents a subheading. The tag is very useful at convaying smaller ideas in the webpage"
    },
    img: {
        code: "<img src=\"image/CodeBackground.jpeg\"></img>",
        desc: "This tag is used to link an image into your webpage! To use it, enter \"<img src='{source_of_image}'></img>\" in your code, and your image will pop up!"
    },
    p: {
        code: "<p>I am a paragraph tag!</p>",
        desc: "Like the heading tags, this tag is used to convay information. Just like how in an essay, you would brake your text into smaller paragraphs, you (should) can organize your information!"
    },
    bold: {
        code: "<b><p>I AM VERY BOLD</p></b>",
        desc: "This tag is used to make some information STAND OUT from others, by bolding it."
    }
}

let currSelected;

allTags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
        let tagInfo = tagDescriptions[tag.getAttribute('tag')]

        tagContent.innerHTML = tagInfo.code;
        tagDescriptionElement.innerText = tagInfo.desc;


        if (currSelected) {
            currSelected.classList.remove('tag-selected')
        }

        currSelected = tag;
        tag.classList.add('tag-selected')
    })
})