class Hero{
    constructor(){
        var op = {
            density:1,
            frictionAir:1
        }
        this.image = loadImage("Superhero-01.png")
        this.body = Bodies.circle(150,600,250)
        this.radius = 250
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius,200)
    }
}