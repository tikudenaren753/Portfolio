// fade機能
const fadeElements = document.querySelectorAll(".fade");
let currentFade = null;

function fadeControl (entries){
    entries.forEach(function(entry){
        if(entry. isIntersecting){
            if(currentFade){
                currentFade.classList.remove("show")
            }
            entry.target.classList.add("show");
            currentFade = entry.target;
        }
    });
}

const observer = new IntersectionObserver(fadeControl,{
    threshold:0.6
});

fadeElements.forEach(function(el){
    observer.observe(el);
});

// slide-number

const slides = document.querySelectorAll(".slide");
const num = document.querySelector(".num");

const NumObserver = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      let index = Array.from(slides).indexOf(entry.target);

      num.classList.add("up");

      setTimeout(()=>{

        num.textContent = "0" + (index + 1);

        num.classList.remove("up");

      },200);

    }

  });

},{threshold:0.8});

slides.forEach(slide => NumObserver.observe(slide));