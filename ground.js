class Ground{
    constructor(){
        var op = {
            isStatic:true
        }
        this.body = Bodies.rectangle(500,790,1500,10,op)
        this.w = 1500
        this.h = 10
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
    }
}