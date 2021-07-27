status="";
function preload(){
}
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    ObjectDetector=ml5.ObjectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    input = document.getElementById("input").innerText;
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}
function draw(){
    image(video, 0, 480, 380);
}
