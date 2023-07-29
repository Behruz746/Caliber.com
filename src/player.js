const main = document.querySelector('.main');
const sliderVideo = document.querySelectorAll(".slider video");
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const playIcon = document.querySelector(".play__icon");
const timeDiv = document.querySelector(".video__time");
const soundValue = document.querySelector(".sound__value");
const playBtn = document.querySelector(".play--btn path");
const closeVideo = document.querySelector(".close__video");
const fullScreeIcon = document.querySelector(".fullScree__icon");

sliderVideo.forEach(video=> {
  video.currentTime = 10;
  video.pause();
});

function videoActive() {
  player.style.display = "block";
  main.style.display = "none";

  sliderVideo.forEach((listVideo, index)=> {
    let src = listVideo.getAttribute('src');
    // listVideo.pause();
    
    if(index === 0) {
      video.src = src;
      video.play();
    }
  });
};

function listVideoAct(listVideo, index) {
  let src = listVideo.getAttribute('src');
  player.style.display = "block";
  video.src = src;
  video.play();
}

function smaolScreen() {
  let src = video.getAttribute('src');
  let videoTime = video.currentTime;
  clearVideo();

  sliderVideo.forEach((listVideo, index)=> {
    if(index === 0) {
      listVideo.src = src;
      listVideo.currentTime = videoTime;
      listVideo.play();
    }
  });
};

playBtn.addEventListener('click', videoActive);
sliderVideo.forEach((video, index)=> video.addEventListener('click', ()=> {
  listVideoAct(video, index);
}));

fullScreeIcon.addEventListener('click', smaolScreen);

// function activeVideo() {
//   player.style.display = "block";
//   video.play();

//   sliderVideo.forEach((listVideo) => {
//     listVideo.pause();
//   });
// }

// function sliderPlay(slidVideo) {
//   activeVideo();
//   const videoSrc = slidVideo.getAttribute("src");
//   video.src = videoSrc;
//   video.play();

//   fullScreeIcon.addEventListener("click", () => {
//     slidVideo.play();
//     slidVideo.volume = 1;
//     clearVideo();
//   });
// }

function clearVideo() {
  player.style.display = "none";
  main.style.display = "block";
  video.pause();
  video.currentTime = 0;
}

// function videoOver(video) {
//   video.play();
// }

// function videoOut(video) {
//   video.pause();
//   video.currentTime = 0;
// }

const toggleElement = {
  once: false,
};

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();

  sliderVideo.forEach((itemV) => {
    itemV.pause();
    itemV.volume = 0;
  });
}

function updateButton() {
  const icon = this.paused ? "images/Property 1=Play.png" : "images/Play & Pause.png";
  playIcon.src = icon;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// ===============================================

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - (hours * 3600)) / 60);
  const remainingSeconds = seconds - (hours * 3600) - (minutes * 60);
  const arr = [minutes.toFixed(), remainingSeconds.toFixed()];
  return arr;
}

setInterval(() => {
  const currentTime = formatTime(video.currentTime);
  const secounts = currentTime[1] < 10 ? `0${currentTime[1]}` : currentTime[1];
  const minutes = currentTime[0] < 10 ? `0${currentTime[0]}` : currentTime[0];
  timeDiv.innerHTML = `${minutes}:${secounts}`;
}, 500);

// =====================================================================

let TF = true;
function videoSoundValue() {
  const soundIcon = document.querySelector(".sound__value img");

  if (TF) {
    video.volume = 0;
    soundIcon.src = "images/Property 1=volume-mute-line.png";
    TF = false;
  } else if (!TF) {
    soundIcon.src = "images/Property 1=volume-up-line.png";
    video.volume = 1;
    TF = true;
  }
}

video.addEventListener("click", togglePlay, toggleElement);
video.addEventListener("play", updateButton, toggleElement);
video.addEventListener("pause", updateButton, toggleElement);
video.addEventListener("timeupdate", handleProgress, toggleElement);

soundValue.addEventListener("click", videoSoundValue, toggleElement);
toggle.addEventListener("click", togglePlay, toggleElement);
progress.addEventListener("click", scrub, toggleElement);
closeVideo.addEventListener("click", clearVideo, toggleElement);
// playBtn.addEventListener("click", activeVideo, toggleElement);

// sliderVideo.forEach((video) => video.addEventListener("mouseover", () => {
//   videoOver(video);
//   video.volume = 0;
// }));

// sliderVideo.forEach((video) => video.addEventListener("mouseout", () => { videoOut(video); }));
// sliderVideo.forEach((video) => video.addEventListener("click", () => { sliderPlay(video); }));

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    updateButton();
    togglePlay();
  } else if (e.keyCode === 27) {
    clearVideo();
  }
});
