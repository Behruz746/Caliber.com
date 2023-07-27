const { body } = document;
const sectionList = document.querySelectorAll(".section__list li");
const playContent = document.querySelector(".play__contant");
const videoPlayerContent = document.querySelector(".videoPlayer__container");
const pleyContainer = document.querySelector(".pley__container");
const gunShutAudio = document.querySelector(".audio__gunShut");
const gunReturnAudio = document.querySelector(".audio__gunReturn");

sectionList.forEach((item, index) => {
  item.addEventListener("click", () => {
    ActivedMenuList(item, index);
  });
});

function ActivedMenuList(item, index) {
  switch (index) {
    case 0:
      trailerRemove(playContent, videoPlayerContent);
      break;

    case 1:
      trailerActive(playContent, videoPlayerContent);
      break;

    case 2:
      trailerActive(playContent, videoPlayerContent);
      break;

    case 3:
      trailerActive(playContent, videoPlayerContent);
      break;

    default:
      break;
  }
}

function trailerActive(content, contentPly) {
  gunShutAudio.play();
  gunShutAudio.currentTime = 0;
  content.classList.add("hidden-container");
  contentPly.classList.remove("hidden-container");
  pleyContainer.classList.add("active--pley__container");
  body.style.backgroundImage = "url('images/fone02.png')";
}

function trailerRemove(content, contentPly) {
  gunShutAudio.play();
  gunShutAudio.currentTime = 0;
  content.classList.remove("hidden-container");
  contentPly.classList.add("hidden-container");
  pleyContainer.classList.remove("active--pley__container");
  body.style.backgroundImage = "url('images/fone.png')";
}

sectionList.forEach((item) => {
  item.addEventListener("mouseover", () => {
    gunReturnAudio.play();
  });
});
