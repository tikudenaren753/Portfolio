// fade機能
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

fades.forEach((fade) => {
  observer.observe(fade);
});