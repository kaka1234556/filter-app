
function preload()
{

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
console.log(results);
console.log("nose x = "+results[0].pose.nose.x);
console.log("nose y = "+results[0].pose.nose.y);
}
}




