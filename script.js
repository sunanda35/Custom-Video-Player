var supportive = !document.createElement("video").canPlayType;
if (supportive) {
  alert(
    "hyy fuck yourself, Marte dam taq kaya ehi browser use karega, lawde!! Sudharja Sale aur browser badal le"
  );
}

var video = document.querySelector(".video");
var progress = document.querySelector(".progress");
var forword = document.getElementById("forword");
var backword = document.getElementById("backword");
var btn = document.getElementById("play_pause");
var mute = document.getElementById("sound");
var fullScreen = document.getElementById("expand");
var vscreen = document.querySelector(".box-video");
var soundbar = document.getElementById("soundbar");
var speed = document.getElementById("speed");
// vscreen.addEventListener("click", function () {
//   togglePlay();
// });
progress.addEventListener("click", function () {
  var p = document.querySelector(".progress");
  p.style.width = 50 + "%";
  p.innerHTML = 50 + "%";
  alert(p);
});
btn.onclick = function () {
  togglePlay();
};
video.onclick = function () {
  togglePlay();
};
forword.onclick = function () {
  video.currentTime += 5;
};
backword.onclick = function () {
  video.currentTime -= 5;
};

vscreen.ondblclick = function () {
  if (document.createElement("video").webkitRequestFullScreen) {
    video.requestFullscreen();
  }
};

document.getElementById("share").addEventListener("click", function () {
  alert("Hyy, really you want to share this video. (;");
});

speed.addEventListener("change", function () {
  video.playbackRate = speed.value;
  video.play();
});

function togglePlay() {
  video.playbackRate = speed.value;
  if (video.paused) {
    btn.className = "fas fa-pause";
    video.play();
  } else {
    btn.className = "fas fa-play";
    video.pause();
  }
}
function toggleVolumn() {
  if (!video.muted) {
    video.muted = !video.muted;
    mute.className = "fas fa-volume-mute";
  } else {
    video.muted = !video.muted;
    mute.className = "fas fa-volume-up";
  }
}

fullScreen.addEventListener("click", function () {
  if (document.createElement("video").webkitRequestFullScreen) {
    video.requestFullscreen();
  } else {
    alert(
      "Sorry, your browser not support full screen mode, Please update or try another!"
    );
  }
});

video.addEventListener("timeupdate", function () {
  var prog = video.currentTime / video.duration;
  progress.value = video.currentTime;
  progress.style.width = prog * 100 + "%";

  document.querySelector("#time").textContent =
    (video.currentTime / 60).toFixed(2) +
    " / " +
    (video.duration / 60).toFixed(2);
});

soundbar.addEventListener("change", function () {
  if (soundbar.value == 0) {
    mute.className = "fas fa-volume-mute";
    video.muted = !video.muted;
  } else {
    if (video.muted) {
      video.muted = !video.muted;
    }
    mute.className = "fas fa-volume-up";
    video.volume = soundbar.value / 100;
  }
});

document.querySelector(".progress-bar").addEventListener("click", function (e) {
  var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
    y = e.pageY - this.offsetTop, // or e.offsetY
    clickedValue = (x * this.max) / this.offsetWidth,
    isClicked = clickedValue <= this.value;

  alert("You clicked within the value range at: " + x);
});

document.addEventListener("keyup", function (key) {
  if (key.keyCode === 32 || key.key === "k") {
    togglePlay();
  } else if (key.key === "m" || key.key === "M") {
    toggleVolumn();
  } else if (key.key === "f" || key.key === "F") {
    if (document.fullscreen === false) {
      if (document.createElement("video").webkitRequestFullScreen) {
        video.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  } else if (key.keyCode === 38) {
    video.volume += 0.1;
    soundbar.value += 10;
  } else if (key.keyCode === 40) {
    video.volume -= 0.1;
    soundbar.value -= 10;
  } else if (key.keyCode === 39 || key.key === "l") {
    video.currentTime += 5;
  } else if (key.keyCode === 37 || key.key === "j") {
    video.currentTime -= 5;
  }
});
