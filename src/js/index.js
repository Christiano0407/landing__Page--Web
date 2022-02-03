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

let aside = gsap.from(".as", {
  delay: 1.5,
  opacity: 0,
  duration: 1,
  x: "-20",
  ease: "power2.out",
});
/* let img = gsap.from(".main__img", { */
/*   delay: 1, */
/*   opacity: 0, */
/*   duration: 1.5, */
/*   ease: "power2.out", */
/* }); */
/* gsap.to(".main__img", { */
/*   scrollTrigger: ".main__img", */
/*   trigger: ".main__img", */
/*   pin: true, */
/*   scrub: 1, */
/*   start: "top top", */
/*   endTrigger: "#otherID", */
/*   end: "bottom 50%+=100px", */
/* }); */
gsap.to(".main__img", {
  duration: 1,
  delay: 1,
  ease: "power2.out",
  scrollTrigger: ".main__img",
  y: -50,
});
