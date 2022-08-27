let slideIndex = 0;
let timer = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  timer = setTimeout(showSlides, 5000); //change image every 5 seconds
}

function currentSlide(x) {
  showSlides(slideIndex = x - 1);
  clearTimeout(timer);
}
