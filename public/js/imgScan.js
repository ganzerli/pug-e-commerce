const img = document.querySelector("[js-attr=img-detail]");
const lens = document.querySelector("[js-attr=img-lens]");

console.log(lens);

if (img && lens) {
  console.log(img);

  const coordinates = {
    left: img.offsetLeft,
    top: img.offsetTop,
    right: img.offsetWidth + img.offsetLeft,
    bottom: img.offsetHeight + img.offsetTop
  };

  console.log(coordinates);
  img.addEventListener("mousemove", e => {
    //
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const mapX = e.clientX - coordinates.left;
    const mapY = e.clientY - coordinates.top;
    //
    lens.style.backgroundImage = `url(${e.target.getAttribute("src")})`;

    //
    console.log(mapX, mapY);
    //
  });
}
