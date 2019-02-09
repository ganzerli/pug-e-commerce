document.addEventListener("DOMContentLoaded", () => {
  const prev = document.querySelector("#slider-left");
  const next = document.querySelector("#slider-right");
  const container = document.querySelector(".slider-container");
  let center = 3;
  const timeTr = 1000;

  const imgref = [
    "bike-lock.jpg",
    "ebike.jpg",
    "guitar.jpg",
    "office-chair.jpg",
    "ratchet-kit.jpg",
    "rustic-table.jpg",
    "table-tennis-hit.jpg",
    "table-tennis-set.jpg"
  ];

  const elemenstsArr = document.querySelectorAll(".slider-img");

  if (prev && next) {
    prev.addEventListener("click", slidePrev);
    next.addEventListener("click", slideNext);
  }
  /////

  function slidePrev() {
    // add a prev img, get the 3 images, last go away, center get right and smaller, and the new one appears
    console.log(center);
    /// movi tut, ngrosa l mez
    console.log(elemenstsArr);
    const middle = container.clientWidth;
    let offset =
      (elemenstsArr[center + 1].clientWidth +
        elemenstsArr[center].clientWidth) /
      2;

    //move the images
    elemenstsArr.forEach((el, i) => {
      el.style.transition = `transform ${timeTr}ms ease`;
      el.style.transform = `translateX(-${offset}px)`;
    });
    // transitionend.. reset elements and print
    center++;
    // set timeout once when transition is finished
    //take all the nodes and change the src from center
    // with for in starting from center-2 give the new img from arr
  }

  function slideNext() {
    //
    console.log(center);
    console.log(elemenstsArr);

    let offset =
      (elemenstsArr[center - 1].clientWidth +
        elemenstsArr[center].clientWidth) /
      2;

    //move the images
    elemenstsArr.forEach((el, i) => {
      el.style.transition = `transform ${timeTr}ms ease`;
      el.style.transform = `translateX(${offset}px)`;
    });
    center--;
    console.log(center);
  }
});
