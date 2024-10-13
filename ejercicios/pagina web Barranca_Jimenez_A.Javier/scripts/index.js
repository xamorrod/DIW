let currentIndex = 0;
const images = document.querySelectorAll(".carrusel-img");
const totalImages = images.length;

function showImages() {
  images.forEach((img, index) => {
    img.style.transform = `translateX(${(index - currentIndex) * 60}%)`;
  });
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  showImages();
}

document.querySelector(".prev").addEventListener("click", () => {
  changeImage(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  changeImage(1);
});

showImages();

setInterval(() => {
  changeImage(1);
}, 3000);
