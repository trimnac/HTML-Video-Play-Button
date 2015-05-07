var vid = document.getElementById("video");
var pauseButton = document.getElementById("vidpause");
var vidwrap = document.getElementById("video-wrapper");
function vidFade() {
  vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
// only functional if "loop" is removed
  vid.pause();
// to capture IE10
  vidFade();
});
pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused == true) {
    vid.play();
    vidwrap.classList.add("playing-wrap");
    //pauseButton.innerHTML = "Pause";
    pauseButton.classList.add("playing");
    pauseButton.classList.remove("paused");
    window.scrollTo(0, 95);
  } else {
    vid.pause();
    vidwrap.classList.remove("playing-wrap");
    //pauseButton.innerHTML = "Play";
    pauseButton.classList.add("paused");
    pauseButton.classList.remove("playing");
  }
})
