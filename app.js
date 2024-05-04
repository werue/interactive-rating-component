const ratingState = document.querySelector(".main-1")
const thankYouState = document.querySelector(".main-2")
const submitBtn = document.querySelector(".submitBtn");
const ratingForm = document.querySelector(".ratingForm");
const ratingOptions = document.getElementsByName("rating");
const printedRating = document.querySelector(".youSelected__rating");

let userRating = null;

ratingForm.addEventListener("submit", (e) => {
    for(option of ratingOptions){
        if(option.checked){
            userRating = (option.value);
        }
    }
    printedRating.textContent = `${userRating}`;
    console.log(printedRating.textContent);
    ratingState.classList.toggle("hidden");
    thankYouState.classList.toggle("hidden");

    e.preventDefault();
})