document.addEventListener("DOMContentLoaded", () => {
  //

  if (
    document.querySelector("#slider-left") &&
    document.querySelector("#slider-right") &&
    document.querySelector("#slider-left")
  ) {
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

    if (prev && next) {
      prev.addEventListener("click", slidePrev);
      next.addEventListener("click", slideNext);
    }
    /////

    function slidePrev() {
      // add a prev img, get the 3 images, last go away, center get right and smaller, and the new one appears
      const elemenstsArr = document.querySelectorAll(".slider-img");

      let offset =
        (elemenstsArr[3 + 1].clientWidth + elemenstsArr[3].clientWidth) / 2;

      //move the images
      elemenstsArr.forEach((el, i) => {
        el.style.transition = `transform ${timeTr}ms ease`;
        el.style.transform = `translateX(-${offset}px)`;
        /// amking the center bigger
        if (i === 3) {
          el.style.transform = `translateX(-${offset}px) scale(1.4)`;
          console.log(el.style.transform);
        }
      });
      // transitionend.. reset elements and print
      center++;
      if (center > imgref.length + 2) {
        center = 3;
      }
      // set timeout once when transition is finished
      //take all the nodes and change the src from center
      // with for in starting from center-2 give the new img from arr
      setTimeout(() => {
        elemenstsArr.forEach((x, index) => {
          x.style.transform = index != 2 ? "none" : "scale(1.4)";
          x.style.transition = "none";
          // now index is 4 ..
          let mapping = center - 2;
          if (mapping < 0) {
            mapping = imgref.length - mapping;
          } else if (mapping + index > imgref.length - 1) {
            mapping -= imgref.length;
          }
          x.setAttribute("src", `./img/${imgref[mapping + index]}`);
        });

        //container.innerHTML = "";
        // get the new id of the new picture center..
      }, timeTr);
    }

    function slideNext() {
      // add a prev img, get the 3 images, last go away, center get right and smaller, and the new one appears
      const elemenstsArr = document.querySelectorAll(".slider-img");

      let offset =
        (elemenstsArr[3 - 1].clientWidth + elemenstsArr[3].clientWidth) / 2;

      //move the images
      elemenstsArr.forEach((el, i) => {
        el.style.transition = `transform ${timeTr}ms ease`;
        el.style.transform = `translateX(${offset}px)`;
        // making the upcoming center bigger
        if (i === 1) {
          el.style.transform = `translateX(${offset}px) scale(1.4)`;
        }
      });
      // transitionend.. reset elements and print
      center--;
      console.log("center : " + center);
      if (center < 0) {
        center = imgref.length - 1;
        console.log("center : " + center);
      }
      // set timeout once when transition is finished
      //take all the nodes and change the src from center
      // with for in starting from center-2 give the new img from arr
      setTimeout(() => {
        elemenstsArr.forEach((x, index) => {
          x.style.transform = index != 2 ? "none" : "scale(1.4)";
          x.style.transition = "none";
          // keep the center bigger
          // now index is 4 ..
          let mapping = center - 2;
          if (mapping + index < 0) {
            //
            mapping += imgref.length;
            //
            //
          } else if (mapping + index > imgref.length - 1) {
            mapping -= imgref.length;
            console.log("if  : " + mapping);
          }
          //
          //
          x.setAttribute("src", `./img/${imgref[mapping + index]}`);
        });

        //container.innerHTML = "";
        // get the new id of the new picture center..
      }, timeTr);
    }

    const repeat = (funct, time) => {
      funct();
      setTimeout(repeat, time, funct, time);
    };

    repeat(slidePrev, 3000);

    //
  }
  //
  //
});

function something() {
  console.log("click");
}
