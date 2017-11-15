function Ingredient(x, y, radius, terminalOffset) {
    this.loc = createVector(x, y)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.r = radius
    this.mass = radius * 2
    this.img = loadImage("assets/salami.png")
    this.terminalOffset = terminalOffset
}

Ingredient.prototype.applyForce = function (force) {
    let fAcc = force.div(this.mass)
    this.acc.add(fAcc)
}

Ingredient.prototype.update = function () {
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.acc.mult(0)
}

Ingredient.prototype.render = function () {
    image(this.img, this.loc.x, this.loc.y, this.r, this.r)
}

Ingredient.prototype.isOut = function () {
    if (this.loc.y > height-this.terminalOffset) {
        return true
    } else {
        return false
    }
}

// Mushroom constructor, make Mushroom inherit from Ingredient

function Mushroom (x,y,radius, terminalOffset) {
    Ingredient.call(this, x,y,radius)
    this.img = loadImage("assets/mushroom.png")
    this.angle = random(-2*PI, 2*PI)
    this.terminalOffset = terminalOffset
}

Mushroom.prototype = Object.create(Ingredient.prototype)
Mushroom.prototype.constructor = Mushroom

//overwrite render function
Mushroom.prototype.render = function () {
    push()
    translate(this.loc.x, this.loc.y)
    rotate(this.angle)
    image(this.img, 0, 0, this.r, this.r)
    pop()
}


// Ingredients system class

function IngSystem(terminalOffset) {
    this.terminalOffset = terminalOffset
    this.ingredients = []
}

IngSystem.prototype.add = function () {
    let x = random(1)
    if (x > 0.5) {
            this.ingredients.push(new Ingredient(random(width), 0, random(20, 100),this.terminalOffset))
    } else {
            this.ingredients.push(new Mushroom(random(width), 0, random(20, 100),this.terminalOffset))
    }

}

IngSystem.prototype.run = function () {
    for (let i = this.ingredients.length - 1; i >= 0; i--) {
        const gravitation = createVector(0, 1)
        let ing = this.ingredients[i]
        ing.applyForce(gravitation)
        ing.update()
        ing.render()

        if (ing.isOut()) {
            this.ingredients.splice(i, 1)
        }
    }
}
