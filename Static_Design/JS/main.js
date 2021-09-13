const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav");
const navUl = document.getElementById("navbar-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navToggle.classList.toggle("active");
});

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

window.addEventListener("load", () => {
  window.scrollTo({
    top: 0,
  });
});

tl.to(".text", { y: "0%", duration: 0.5, stagger: 0.15 });
tl.to(".slider", { y: "-100%", duration: 1.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

tl.fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".hero", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const body = document.querySelector("body");
const toggleBtn = document.getElementById("toggle-btn");
const DarkLight = document.getElementById("dark-light");
// const dark  = document.getElementById('dark');

// light.addEventListener('click', () => {
//     light.classList.toggle('active');
// })

// light.onclick = function () {
//     light.style.display = 'none';
//     dark.style.display = 'block';
//     body.classList.toggle('light-theme');
// }

// dark.onclick = function () {
//     dark.style.display = 'none'
//     light.style.display = 'block';
// }

// DarkLight.onclick = function () {
//     if (DarkLight.classList.contains('fa-sun')){
//         DarkLight.classList.replace('fa-sun', 'fa-moon');
//     }
//     else {
//         DarkLight.classList.replace('fa-moon', 'fa-sun');
//     }
// }

toggleBtn.onclick = function () {
  toggleBtn.classList.toggle("theme-dark");
  body.classList.toggle("dark-theme");
  if (DarkLight.classList.contains("fa-sun")) {
    DarkLight.classList.replace("fa-sun", "fa-moon");
  } else {
    DarkLight.classList.replace("fa-moon", "fa-sun");
  }
};

const navScroll = function (str) {
  let offsetPosition = document.getElementById(str).offsetTop;
  navToggle.classList.remove("active");
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
  if (window.innerWidth <= 800) navLinks.classList.toggle("active");
};
