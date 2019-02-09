document.addEventListener("DOMContentLoaded", () => {
  const prev = document.querySelector("#slider-left");
  const next = document.querySelector("#slider-right");
  let center = 3;

  const elemenstsArr = document.querySelectorAll(".slider-img");

  if (prev && next) {
    prev.addEventListener("click", slidePrev);
    next.addEventListener("click", slideNext);
    console.log(prev, next);
  }
  /////

  function slidePrev(e) {
    // add a prev img, get the 3 images, last go away, center get right and smaller, and the new one appears
    console.log("prev");
  }

  function slideNext(e) {
    //
    console.log("next");
    console.log(elemenstsArr);
  }
});
