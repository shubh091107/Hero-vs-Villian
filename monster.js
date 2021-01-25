class Monster{
    constructor(){
        var op = {
            density:1,
            frictionAir:1,
        }
        this.image = loadImage("Monster-01.png")
        this.body = Bodies.circle(1200,500,300)
        this.radius = 300
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius,200)
    }
}