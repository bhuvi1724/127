song1="";
song2="";
function setup()
{
    video=createCapture(VIDEO);
    video.hide();

    canvas=createCanvas(550,450);
    canvas.center();

}
function preload()
{
    song1=loadsound("music.mp3");
    song2=loadsound("music2.mp3");

}
function draw()
{
    image(video,0,0,550,450);
}
function play()
{
    song1.play();
    song2.play();
}

   



