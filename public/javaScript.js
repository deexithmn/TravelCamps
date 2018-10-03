// Element selection
var headImage = document.querySelector("#headImage");



// Index for the image array
var imageTrip = 0;

// Images to rotate;
var images = [
    "url('https://images.unsplash.com/photo-1533390446496-2bfd4671cb47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2141553a1136989b9b05afc7e1d36dd&auto=format&fit=crop&w=1534&q=80')",
    "url('https://images.unsplash.com/photo-1533367972136-b8b844e9cfb5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1df2a9077e1de803d59080c1a012be21&auto=format&fit=crop&w=1500&q=80')",
    "url('https://images.unsplash.com/photo-1533435784298-a8791550ea1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d5ec31ef6c4c45b2695fb0a4a9f7c7f&auto=format&fit=crop&w=1498&q=80')",
    "url('https://images.unsplash.com/photo-1533431718451-44f4ccde21a0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2974507b6b5aa8e8d4d054f146c8f3d&auto=format&fit=crop&w=1500&q=80')"];

imageRotation();

function imageRotation()
{
  setTimeout(changeImage, 10000) //wait ten seconds
  imageTrip++;
}

function changeImage(){
    if(imageTrip === images.length){
        imageTrip = 0 ;
    }
    headImage.style.backgroundImage  = images[imageTrip];
    imageRotation();
}