
function preload()
{

}

function setup()
{
Canvas=createCanvas(850,450);
Canvas.center();

}


function draw()
{
    image(video,0,0,850,450);
}
function take_snapshot()
{
save('#photo_booth.png');

}




