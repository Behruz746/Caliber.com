const btnNext = document.querySelector(".slider__btn--next");
const btnProd = document.querySelector(".slider__btn--prod");
const sliderBox = document.querySelector(".slider__box");

let TF = 0;

function nextSlider() {
  if (TF === 0) {
    sliderBox.style.transform = "translateY(-395px)";
    TF = 1;
  } else if (TF === 1) {
    sliderBox.style.transform = "translateY(-790px)";
    TF = 2;
  } else {
    sliderBox.style.transform = "translateY(0px)";
    TF = 0;
  }

  return TF;
}

function prodSlider() {
  let num = nextSlider();

  if (num === 0) {
    sliderBox.style.transform = "translateY(-790px)";
  }

  if (num === 2) {
    sliderBox.style.transform = "translateY(0px)";
    num = 0;
  }
}

btnNext.addEventListener("click", prodSlider);
btnProd.addEventListener("click", nextSlider);
