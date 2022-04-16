const ratings = document.querySelectorAll('.rating');
const rated = document.querySelector('.selected-number');
const submit = document.querySelector('#submit-button');
const rate = document.querySelector('.container');
const thankYou = document.querySelector('.thankyou-container');

ratings.forEach((rating) => {
    rating.addEventListener('click', () => {
        let selectedRating = rating.value;
        rated.innerHTML = selectedRating;
    });
});

submit.addEventListener('click', () => {
    rate.style.display = 'none';
    thankYou.style.display = 'block';
});