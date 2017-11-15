let bg
let ingSys
let terminal
function setup() {
    terminalOffset = 200
    createCanvas(windowWidth, windowHeight)
    bg = loadImage("assets/BG.jpg")
    ingSys = new IngSystem(terminalOffset)
    terminal = new Terminal(terminalOffset)
}

function draw() {
    image(bg, 0, 0, width, height)

    if (ingSys.ingredients.length < 10) {
        ingSys.add()
    }
    
    console.log(ingSys.ingredients.length)
    ingSys.run()
    fill(0)
    rect(0,windowHeight-200, windowWidth, windowHeight)
    terminal.draw()

}
