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
TweenMax.staggerFrom(
  ".navigation__logo > div, span, label, input",
  1,
  {
    y: "40",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 1.5,
  },
  0.2
);

// Aside One
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

TweenMax.staggerFrom(
  ".aside__text > span",
  2,
  {
    x: "-20",
    opacity: 0,
    ease: Power2.easeInOut,
    delay: 1,
  },
  0.2
);

TweenMax.staggerFrom(
  ".aside__social > div, ul, li, a, i",
  2,
  { x: "-20", opacity: 0, ease: Power2.easeInOut, delay: 2 },
  0.2
);

// Swipper  Carousel / Card ===
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
TweenMax.from(".card-slide", 3, {
  delay: 2,
  duration: 1.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

// Aside Icons Social ==
let aside = gsap.from(".as", {
  delay: 1.5,
  opacity: 0,
  duration: 1,
  x: "-20",
  ease: "power2.out",
});

// Image
TweenMax.from(".main__img", 3, {
  duration: 1,
  delay: 1,
  y: 40,
  opacity: 0,
  ease: "power2.out",
});
//Text-title
TweenMax.from(".main-title", 3, {
  y: "20",
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0.4,
});
TweenMax.from(".main-text", 2, {
  y: "-20",
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1,
});
gsap.from(".main-btn", {
  delay: 1.5,
  opacity: 0,
  duration: 1.5,
});
TweenMax.from(".main-shapes", 4, {
  y: "40",
  opacity: 0,
  ease: "sine-out",
  duration: 2.5,
  delay: 0.5,
});

console.groupEnd();
