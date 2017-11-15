// Constructor
function Terminal (terminalOffset) {
    this.terminalOffset = terminalOffset
    this.slices = this.createSlices()
}

Terminal.prototype.createSlices = function (){
    slices = []
    nSlices = 8
    startAngle = 0
    angleStep = (2*PI)/ nSlices
    stopAngle= angleStep
    
    
    for (let i = 0; i < nSlices; i++) {
        slices.push(new Slice(startAngle, stopAngle))
        startAngle = stopAngle
        stopAngle += angleStep
    }
    return slices
}

Terminal.prototype.draw= function (){
    centerX = 150
    centerY = windowHeight-100
    strokeWeight(4); 
    stroke(255, 0, 107); 
    ellipSize = 170
     for (let i = 0; i < this.slices.length; i++) { 
        fill (random(255),random(255),random(255))
        arc(centerX,centerY,ellipSize,ellipSize,this.slices[i].startAngle,this.slices[i].stopAngle)
     }
    noStroke()
}

function Slice (startAngle, stopAngle) {
    this.startAngle = startAngle
    this.stopAngle = stopAngle
}