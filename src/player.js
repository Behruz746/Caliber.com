const sectionList = document.querySelectorAll(".section__list li");
const trailerAc = document.querySelector(".trailer__container--active");
const playContent = document.querySelector(".play__contant");

function trailerActive() {
  playContent.classList.add("hidden-container");
}

sectionList.forEach((item, index) => item.addEventListener("click", () => {
  switch (index) {
    case 0:

      break;

    default:
      break;
  }
}));
