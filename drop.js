class Drop {
    constructor(x,y){
        var options = {
            isStatic: true,
            'friction' : 0.1
        }
        
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain);
        //load Image for BestMan
        
    }

    display(){
        var maxDrops = 100;
        var pos = this.rain.position;
        
    for(var i = 0 ; i<maxDrops;i++)
    {
        drops.push(new createDrop(random (0 , 400) , random(0 ,400)));
    }
    

    update()
    {
        if(this.rain.position.y > height)
        {
            Matter.Body.setPosition(this.rain , {x:random(0 ,400) , y:random(0 , 400)})
        }
    }
}
}