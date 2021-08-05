Mustache_x=0;
Mustache_y=0;
function preload()
{
   Mustache=loadImage("https://i.postimg.cc/3Nc1q1kZ/236408aae759daf44b74a6ed748389df.png");
}

function setup()
{
Canvas=createCanvas(850,450);
Canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(850,450);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
    
}
function draw()
{
image(video,0,0,850,450);
image(Mustache,Mustache_x,Mustache_y,100,100);
}
function take_snapshot()
{
save('#photo_booth.png');

}

function modelLoaded()
{
console.log("PoseNet is initialised");

}

function gotPoses(results)
{
if(results.length>0)
{
Mustache_x=results[0].pose.nose.x-10;
Mustache_y=results[0].pose.nose.y-7;
console.log(results);
console.log("mustache x = "+Mustache_x);
console.log("mustache y = "+Mustache_y);
}
}




