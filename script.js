const header=document.querySelector(".site-header");
const toggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelectorAll("#nav a");
toggle?.addEventListener("click",()=>{const open=header.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
navLinks.forEach(link=>link.addEventListener("click",()=>{header.classList.remove("open");toggle?.setAttribute("aria-expanded","false")}));

const audio=document.querySelector("#anthemAudio");
const play=document.querySelector("#playButton");
const status=document.querySelector("#playerStatus");
play?.addEventListener("click",()=>{
  if(audio.paused){audio.play();}else{audio.pause();}
});
audio?.addEventListener("play",()=>{play.textContent="⏸ Pause anthem";status.textContent="Playing"});
audio?.addEventListener("pause",()=>{play.textContent="▶ Play anthem";status.textContent="Paused"});
audio?.addEventListener("ended",()=>{play.textContent="▶ Play anthem";status.textContent="Finished"});
