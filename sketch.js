const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg

var hero
var rope1
var monster
var gr


var box1
var box2
var box3
var box4

var box5
var box6 
var box7
var box8
var box9

var box10
var box11
var box12
var box13

function preload() {
bg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(2000, 800);
  engine = Engine.create();
  world = engine.world;

  hero = new Hero()
  rope1 = new Rope(hero.body,{x:200,y:300})
  monster = new Monster()
  gr = new Ground()


  box1 = new Block(500,690)
  box2 = new Block(500,590)
  box3 = new Block(500,490)
  box4 = new Block(500,390)

  box5 = new Block(600,690)
  box6 = new Block(600,590)
  box7= new Block(600,490)
  box8= new Block(600,390)
  box9= new Block(600,290)

  
  box10= new Block(700,690)
  box11= new Block(700,590)
  box12 = new Block(700,490)
  box13 = new Block(700,390)
}

function draw() {
  background(bg);
  Engine.update(engine);
  drawSprites()
  hero.display()
  monster.display()
  gr.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()

  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()

  box10.display()
  box11.display()
  box12.display()
  box13.display()
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}