const btnProd = document.querySelector(".slider__btn--next");
const btnNext = document.querySelector(".slider__btn--prod");
const sliderBox = document.querySelector(".slider__box");

let y = 0;

function upArrow() {
  if (y >= "0") {
    y += 130;
    sliderBox.style.transform = `translateY(-${y}px)`;
    console.log(y, "-top");

    if (y >= 910) {
      y = 0;
      sliderBox.style.transform = `translateY(${y}px)`;
      console.log("0px", "+top");
    }
  }
}

function dawnArrow() {
  if (y >= "0") {
    y -= 130;
    sliderBox.style.transform = `translateY(-${y}px)`;
    console.log(y, "+bottom");

    if (y === -130) {
      y = 910;
      sliderBox.style.transform = `translateY(-${y - 130}px)`;
      console.log("910px", "-bottom");
    }
  }
}

btnProd.addEventListener("click", dawnArrow);
btnNext.addEventListener("click", upArrow);
