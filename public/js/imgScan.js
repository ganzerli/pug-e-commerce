const img = document.querySelector("[js-attr=img-detail]");
const lens = document.querySelector("[js-attr=img-lens]");

if (img && lens) {
  const square = document.createElement("div");
  square.classList.add("details-mouse-square");
  //
  // append to document
  img.appendChild(square);

  //lens.style.border = "4px green solid";

  const coordinates = {
    left: img.offsetLeft + window.pageXOffset,
    top: img.offsetTop + window.pageYOffset,
    right: img.offsetWidth + img.offsetLeft,
    bottom: img.offsetHeight + img.offsetTop
  };

  console.log(coordinates);
  img.addEventListener("mousemove", e => {
    // hide cursor for hover img
    img.style.cursor = "none";

    // get number of pixel of mouse in the img, relative to the img pos.
    const mapX = e.clientX - coordinates.left;
    const mapY = e.clientY - coordinates.top;

    // define something...
    const percentX = (mapX / (coordinates.right - coordinates.left)) * 100;
    const percentY = (mapY / (coordinates.bottom - coordinates.top)) * 100;
    console.log(percentX, percentY);

    // square refreshing
    square.style.top = percentX + "%";
    square.style.left = percentY + "%";
    //
    lens.style.backgroundImage = `url(${e.target.getAttribute("src")})`;
    lens.style.backgroundPosition = `${percentX}% ${percentY}%`;
    lens.style.backgroundRepeat = "no-repeat";

    console.log(mapX, mapY);

    // hide mouse leave square

    //
  });
}
