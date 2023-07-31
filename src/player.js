/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-inner-declarations */

const main = document.querySelector(".main");
const sliderVideo = document.querySelectorAll(".slider video");
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const playIcon = document.querySelector(".play__icon");
const timeDiv = document.querySelector(".video__time");
const playerTime = document.querySelector(".player__time h1");
const soundValue = document.querySelector(".sound__value");

const playBtn = document.querySelector(".play--btn g");
const playSvg = document.querySelector(".play--btn");
const pauseSvg = document.querySelector(".pause--btn");

const closeVideo = document.querySelector(".close__video");
const fullScreeIcon = document.querySelector(".fullScree__icon");
const borderVideo = document.querySelector(".borderVideo");

let TF = true;

// =====================================================================================

function videoActive() {
  player.style.display = "block";
  main.style.display = "none";

  const toggleBtn = true;

  if (toggleBtn) {
    playSvg.style.display = "none";
    pauseSvg.style.display = "block";

    sliderVideo.forEach((listVideo, index) => {
      const src = listVideo.getAttribute("src");
      listVideo.pause();
  
      if (index === 0) {
        video.src = src;
        video.play();
      }
    });

  } else if (!toggleBtn) {
    playSvg.style.display = "block";
    pauseSvg.style.display = "none";

  }
}

// ===================================================================================

function listVideoAct(listVideo) {
  const src = listVideo.getAttribute("src");
  player.style.display = "block";
  video.src = src;
  video.play();

  sliderVideo.forEach((itemV) => {
    itemV.pause();
    itemV.volume = 1;
  });
}

function smaolScreen() {
  const src = video.getAttribute("src");
  const videoTime = video.currentTime;
  clearVideo();

  sliderVideo.forEach((listVideo, index) => {
    if (index === 0) {
      listVideo.src = src;
      listVideo.currentTime = videoTime;
      listVideo.play();

      function getTime() {
        const math = (listVideo.currentTime / listVideo.duration) * 627;
        const scrub = 627;
        borderVideo.style.strokeDashoffset = scrub - math.toFixed();
      }

      setInterval(() => {
        const currentTime = formatTime(listVideo.currentTime);
        const secounts = currentTime[1] < 10 ? `0${currentTime[1]}` : currentTime[1];
        const minutes = currentTime[0] < 10 ? `0${currentTime[0]}` : currentTime[0];
        playerTime.innerHTML = `${minutes}:${secounts}`;
      }, 500);

      if (!TF) {
        listVideo.volume = 0;
      } else if (TF) {
        listVideo.volume = 1;
      }

      listVideo.addEventListener("timeupdate", getTime);
    }
  });
}

playBtn.addEventListener("click", videoActive);

sliderVideo.forEach((video, index) => video.addEventListener("click", () => {
  listVideoAct(video, index);
}));

function clearVideo() {
  player.style.display = "none";
  main.style.display = "block";
  video.pause();
  video.currentTime = 0;
}

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
fullScreeIcon.addEventListener("click", smaolScreen);

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    updateButton();
    togglePlay();
  } else if (e.keyCode === 27) {
    clearVideo();
  }
});
