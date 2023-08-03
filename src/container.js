/* eslint-disable no-use-before-define */
const { body } = document;
const sectionList = document.querySelectorAll(".section__list li");
const playContent = document.querySelector(".play__contant");
const videoPlayerContent = document.querySelector(".videoPlayer__container");
const galleryContainer = document.querySelector(".gallery__container");
const pickContainer = document.querySelector(".pick__container");
const pleyContainer = document.querySelector(".pley__container");
const gunShutAudio = document.querySelector(".audio__gunShut");
const gunReturnAudio = document.querySelector(".audio__gunReturn");

function ActivedMenuList(index) {
  switch (index) {
    case 0:
      trailerActive(playContent, videoPlayerContent, galleryContainer, pickContainer, "images/fone.png");
      pleyContainer.classList.remove("active--pley__container");
      break;

    case 1:
      trailerActive(videoPlayerContent, playContent, galleryContainer, pickContainer, "images/fone02.png");
      pleyContainer.classList.add("active--pley__container");
      break;

    case 2:
      trailerActive(galleryContainer, playContent, videoPlayerContent, pickContainer, "images/fone03.png");
      pleyContainer.classList.add("active--pley__container");
      break;

    case 3:
      trailerActive(pickContainer, playContent, videoPlayerContent, galleryContainer, "images/fone04.png");
      pleyContainer.classList.remove("active--pley__container");
      break;

    default:
      break;
  }
}

function trailerActive(container01, container02, container03, container04, image) {
  gunShutAudio.play();
  gunShutAudio.currentTime = 0;

  container01.classList.remove("hidden-container");
  container02.classList.add("hidden-container");
  container03.classList.add("hidden-container");
  container04.classList.add("hidden-container");

  body.style.backgroundImage = `url('${image}')`;
}

sectionList.forEach((item) => {
  item.addEventListener("mouseover", () => {
    gunReturnAudio.play();
  });
});

sectionList.forEach((item, index) => {
  item.addEventListener("click", () => {
    ActivedMenuList(index);
  });
});
