const img = document.querySelectorAll("#img");
const msnry = document.querySelector("#masonry");

let grid = new Masonry(msnry, {
  itemSelector: "#card",
});

imagesLoaded(img).on("progress", function () {
    grid.layout();
});