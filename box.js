class Box{
    constructor(x,y){
        var options = {
            'isStatic':false
        }
    this.box = Bodies.rectangle(x,y,5,5,options);
    World.add(world,this.box);
    this.Visiblity = 255;
    }
    display(){
    if(this.box.speed < 3){
    this.Visiblity= 255
    }
    else{
        World.remove(world, this.box);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        fill ("blue");
        rect( this.box.position.x, this.box.position.y, 30, 30);
        pop();
    }
}
    score(){
        if(this.Visiblity<0 && this.Visiblinty> - 105){
            score++;
        }
    }
}