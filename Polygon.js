class Polygon{
    constructor(x,y,width,height){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.04,
            length: 10
        }
         this.pointB = pointB;
    }
    display(){
        push();

        stroke(48,22,8);
        if(pointA.x < 220){
            strokeweigtht(7)
            line(pointA.x - 20,pointA.y,pointB.x -10,pointB.y);
            line(pointA.x - 20,pointA.y,pointB.x + 30,poinB.y - 3);
            image(this.sling3,pointA.x -30,pointA.y -10,15,30);
        }
        else{
            strokeweight(3);
            line(pointA.x + 25, pointA.y,pointB.x -10,pointB.y);
            line(pointA.x + 25,pointA.y,pointB.x + 30,pointB.y - 3);
            image(this.sling3,pointA.x + 25,pointA.y -10,15,30);
        }



        pgop();
    }
}
    
