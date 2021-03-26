function preload(){}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    capture=createCapture(VIDEO);
    capture.size(300,300);
    capture.hide();
    postnet=ml5.poseNet(capture,modeloaded)
    postnet.on("pose",displayresults)
}
function draw(){
    image(capture,0,0,300,300);
}
function modeloaded(){
    console.log("The model has been loaded")
}
function displayresults(results){
    console.log(results)
}