const pictureForm = document.getElementById("addPicture-form");

const imageWidthGroup = document.getElementById("imageWidth-formGroup");
const imageHeightGroup = document.getElementById("imageHeight-formGroup");

const imageWidthInput = imageWidthGroup.querySelector("input");
const imageHeightInput = imageHeightGroup.querySelector("input");

const gallery = document.getElementById("gallery-wrapper");

pictureForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(isSizeValid(imageHeightGroup) & isSizeValid(imageWidthGroup)){
        const width = imageWidthInput.value;
        const height = imageHeightInput.value;
        addImageCard(width,height);
    }
    
});

function isSizeValid(inputGroup){
    const input = inputGroup.querySelector("input");
    const num = parseInt(input.value);
    const str = num + '';

    console.log(input.value, Number.isInteger(input.value + 0));

    if(isNaN(num)){
        showError(inputGroup, "input positive number");
        return false;
    }
    if(input.value != str) {
        showError(inputGroup,"did you mean " + num + "?"); 
        return false;
    }
    if(input.value <=0) {
        showError(inputGroup, "number must be positive");
        return false;
    }
    
    removeErrors(inputGroup);
    return true;
}

function showError(inputGroup,msg){
    inputGroup.classList.add('error');
    inputGroup.querySelector("small").innerText = msg;
}

function removeErrors(inputGroup){
    inputGroup.classList.remove('error');
    inputGroup.querySelector("small").innerText = '';
}

function addImageCard(width,height){
    var card = document.createElement('div');
    card.classList.add("card");
    card.style.width=width;
    card.innerHTML = 
    `<img class="card-img-top" src="https://picsum.photos/${width}/${height}" alt="random image">
    <div class="card-img-overlay show-on-hover">
        <button class="btn rounded-circle btn-light image-btn" aria-label="settings">
            <i class="fas fa-cog"></i>
        </button>
        <button class="btn rounded-circle btn-light image-btn" aria-label="settings">
            <i class="fas fa-times"></i>
        </button>
    </div>`;
    gallery.prepend(card);
}