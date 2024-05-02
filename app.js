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

    console.log(userRating);
    e.preventDefault();
})