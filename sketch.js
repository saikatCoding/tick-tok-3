var hr,mn,sc
var hrangle,mnangle,scangle
function setup() {
  createCanvas(800,400);
 angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  hr=hour()
  mn=minute()
  sc=second()
  scangle=map(sc,0,60,0,360)
  mnangle=map(mn,0,60,0,360)
  hrangle=map(hr%12,0,12,0,360)

  //drawing seconds hand 
  push();
   rotate(scangle);
   //rotate the hand based on angle calculated 
   stroke(255,0,0);
    strokeWeight(10);
     line(0,0,100,0);
      pop()
  



   //drawing min hand 
   push();
   rotate(mnangle);
   //rotate the hand based on angle calculated 
   stroke(0,255,0);
    strokeWeight(10);
     line(0,0,75,0);
      pop()
  


   //drawing hour hand 
   push();
   rotate(hrangle);
   //rotate the hand based on angle calculated 
   stroke(0,0,255);
    strokeWeight(10);
     line(0,0,50,0);
      pop()

      strokeWeight(10)
      //draw the arc
      strokeWeight(10);
      noFill();
      //Seconds 
      stroke(255,0,0); 
      arc(0,0,300,300,0,scangle); 
      //Minutes 
      stroke(0,255,0); 
      arc(0,0,280,280,0,mnangle); 
      //Hour 
      stroke(0,0,255); 
      arc(0,0,260,260,0,hrangle);
 
}
