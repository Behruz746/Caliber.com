const sectionList = document.querySelectorAll(".section__list li");

for (let i = 0; i < sectionList.length; i++) {
  sectionList[i].addEventListener("click", () => {
    for (let j = 0; j < sectionList.length; j++) {
      sectionList[j].classList.remove("active--line");
    }

    sectionList[i].classList.add("active--line");
  });
}
