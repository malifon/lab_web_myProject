const container_image = document.getElementById("container-image");
const elements = document.querySelectorAll(".team-profile, .img-item");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    document.getElementById("container-image").style.display = "flex";
    document.getElementById("showImage").src = this.src;
    document.body.style.overflowY = "hidden";
  });
}

container_image.addEventListener("click", () => {
  document.getElementById("container-image").style.display = "none";
  document.body.style.overflowY = "initial";
});
