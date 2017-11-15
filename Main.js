let bg;
let ingSys

function setup() {
    createCanvas(windowWidth, windowHeight)
    bg = loadImage("/assets/BG.jpg")
    ingSys = new IngSystem()
}

function draw() {
    image(bg, 0, 0, width, height)

    if (ingSys.ingredients.length < 10) {
        ingSys.add()
    }
    console.log(ingSys.ingredients.length)

    ingSys.run()

}
