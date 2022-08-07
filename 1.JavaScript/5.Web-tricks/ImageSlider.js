//image slider 
windows.addEventListener('Load', function(){
//console.log('')
var images = [];
images[0] = '/path/to/img.jpg';
images[1] = '/path/to/img2.jpg';
images[2] = '/path/to/img3.jpg';
images[3] = '/path/to/img4.jpg';

var imageIndex = 0;

function changeImage() {

document.slider.src =  images[imageIndex];

    if (imageIndex < 2) {
    imageIndex++:
}else {
    imageIndex = 0
}

setInterval(changeImage, 1500);

});


