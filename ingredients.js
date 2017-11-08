let ingredients = []

function Ingredient (x,y,radius) {
    this.loc = createVector(x,y)
    this.vel = createVector(0,0)
    this.acc = createVector(0,0)
    this.r = radius
    this.mass = radius * 2
    this.img = loadImage("/PizzaGame/assets/salami.png")
}

Ingredient.prototype.applyForce = function (force) {
    fAcc = force.div(mass)
    this.acc.add(fAcc)
}

Ingredient.prototype.update = function () {
    this.vel.add(acc)
    this.loc.add(vel)
}

Ingredient.prototype.render = function () {
    imageMode(CENTER)
    image(img, this.loc.x, this.loc.y, this.r, this.r)
}

Ingredient.prototype.add = function () {
    ingredients.push(new Ingredient(random(width), 0, random(20,50)))
}

const gravitation = createVector(0,1)

function setup () {
    createCanvas(windowWidth, windowHeight)
    background(255)
    for (let i = 0; i < )
}

function draw () {
    
}