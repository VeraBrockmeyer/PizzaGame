function Ingredient (x,y,radius) {
    this.loc = createVector(x,y)
    this.vel = createVector(0,0)
    this.acc = createVector(0,0)
    this.r = radius
    this.mass = radius * 2
    this.img = loadImage('/PizzaGame/assets/salami.png')
}

Ingredient.prototype.applyForce = function (force) {
    fAcc = force.div(mass)
}