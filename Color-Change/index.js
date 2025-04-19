const button = document.getElementsByTagName("body")[0]

function addColor(clr) {
    button.style.backgroundColor = clr;
}

function random() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red} ${green} ${blue})`

    button.style.backgroundColor = color;
}