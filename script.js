const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const tc = document.querySelector("#tick");
const volumeIcon = document.querySelector(".volume");

let isMuted = true;

volumeIcon.addEventListener("click", () => {
  isMuted = !isMuted;
  if (isMuted) {
    volumeIcon.classList.add("volume-off");
  } else {
    volumeIcon.classList.remove("volume-off");
  }
});

const func =() =>{
    tc.play();
}


const show_clock = () =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6 ;//+ (day.getSeconds() + day.getMilliseconds()/1000)*0.1;
    let ss = (day.getSeconds())*6// + day.getMilliseconds()/1000) * 6;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    if(isMuted){
        tc.pause();
    }
    else{
        tc.play();
    }
}

setInterval(show_clock,0);
