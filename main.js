const pictureForm = document.getElementById("addPicture-form");
const imageWidthInput = document.getElementById("imageWidth-inputText");
const imageHeightInput = document.getElementById("imageHeight-inputText");

pictureForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(` image: (${imageWidthInput.value}, ${imageHeightInput.value})`);
})