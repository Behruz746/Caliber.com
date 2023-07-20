const { body } = document;
const sectionList = document.querySelectorAll(".section__list li");
const trailerAc = document.querySelector(".trailer__container--active");
const playContent = document.querySelector(".play__contant");
const videoPlayerContent = document.querySelector(".videoPlayer__container");
const pleyContainer = document.querySelector(".pley__container");

for (let i = 0; i < sectionList.length; i++) {
  sectionList[i].addEventListener("click", () => {
    for (let j = 0; j < sectionList.length; j++) {
      sectionList[j].classList.remove("active--line");
    }

    sectionList[i].classList.add("active--line");
  });
}

sectionList.forEach((item, index) => {
  item.addEventListener("click", () => {
    switch (index) {
      case 0:
        trailerRemove(playContent, videoPlayerContent);
        break;

      case 1:
        trailerActive(playContent, videoPlayerContent);
        break;

      default:
        break;
    }
  });
});

function trailerActive(content, contentPly) {
  content.classList.add("hidden-container");
  contentPly.classList.remove("hidden-container");
  pleyContainer.classList.add("active--pley__container");
  body.style.backgroundImage = "url('images/fone02.png')";
}

function trailerRemove(content, contentPly) {
  content.classList.remove("hidden-container");
  contentPly.classList.add("hidden-container");
  pleyContainer.classList.remove("active--pley__container");
  body.style.backgroundImage = "url('images/fone.png')";
}
