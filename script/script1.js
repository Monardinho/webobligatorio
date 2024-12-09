let currentImageIndex = 0;
const images = ["images/surf1.jpg", "images/surf2.jpg", "images/surf3.jpg"];

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById("main-image").src = images[currentImageIndex];
}
