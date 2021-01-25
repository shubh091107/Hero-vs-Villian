class Block{
    constructor(x,y){
        var op = {
            restitution:1,
            density:0.3,
            friction:0.5
        }
        this.body = Bodies.rectangle(x,y,100,100)
        this.w = 100
        this.h = 100
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        rotate(this.body.angle)
        translate(pos.x,pos.y)
        fill("#7ECBF2")
        strokeWeight(20)
        stroke("brown")
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}
