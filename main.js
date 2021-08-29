function setup()
{
    c1=createCanvas(700,500);
    c1.position(800,200);
    v1=createCapture(VIDEO);
    v1.position(20,200);
    pn=ml5.poseNet(v1,modelLoaded);
    pn.on("pose",gotPoses);
}

nosey=0;
nosex=0;
difference=0;
left_wrist_x=0;
rigth_wrist_x=0;
function modelLoaded()
{
    console.log("Model has loaded");
}
function gotPoses(results)
{ if(results.length>0)
    {
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
    console.log("lwx="+left_wrist_x+"rwx"+right_wrist_x+"diff= "+difference);
    difference=floor(left_wrist_x-right_wrist_x);
    }
} 
function draw()
{
    document.getElementById("size").innerHTML="size:"+difference;
    background("yellow")
    fill("red");
    square(nosex,nosey,difference);
}   