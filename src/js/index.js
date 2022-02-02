console.group("Landing Page Web");

// GSAP =====
let tween = gsap.from(
  ".navigation",
  {
    delay: 1.5,
    opacity: 0,
    duration: 1,
    y: "-50",
    ease: Expo.easeInOut,
  },
  0.0
);

let tweenAs = gsap.from(
  ".aside",
  {
    delay: 1,
    opacity: 0,
    duration: 1,
    x: "-20",
    ease: Expo.easeInOut,
  },
  0.0
);

// Swipper ===
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
console.groupEnd();
