function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


  box1=new BlueBox(500,360,20,30);
  box2=new YellowBox(520,360,20,30);
  box3=new GreenBox(540,360,20,30);
  box4=new RedBox(560,360,20,30);
  box5=new GreenBox(580,360,20,30);
  box6=new YellowBox(600,360,20,30);

  box7=new RedBox(510,360,20,30);
  box8=new YellowBox(520,360,20,30);
  box9=new BlueBox(550,360,20,30);
  box10=new GreenBox(570,360,20,30);
  box11=new RedBox(590,360,20,30);

  box12=new YellowBox(520,360,20,30);
  box13=new BlueBox(540,360,20,30);
  box14=new RedBox(560,360,20,30);
  box15=new GreenBox(580,360,20,30);
 
  box16=new YellowBox(530,360,20,30);
  box17=new RedBox(550,360,20,30);
  box18=new GreenBox(570,360,20,30);

  box19=new BlueBox(540,360,20,30);
  box20=new Redox(560,360,20,30);

  box21=new GreenBox(550,360,20,30);

  ball = new Ball(0,0,50);
  
}

function draw() {
  background(255,255,255);  

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

box7.display();
box8.display();
box9.display();
box10.display();
box11.display();

box12.display();
box13.display();
box14.display();
box15.display();

box16.display();
box17.display();
box18.display();

box19.display();
box20.display();

box21.display();

ball.display();


  drawSprites();
}