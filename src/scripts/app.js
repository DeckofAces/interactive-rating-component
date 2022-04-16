const ratings = document.querySelectorAll('.rating');

/* For Loop Method */
// for (let i = 0; i < ratings.length; i++) {
//     ratings[i].addEventListener('click', () => {
//         if (ratings[i].classList.contains('rating--clicked')) {
//             ratings[i].classList.remove('rating--clicked');
//         } else {
//             ratings[i].classList.add('rating--clicked');
//         }
//     });
// }

/* forEach method*/
ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        if (rating.classList.contains('rating--clicked')) {
            rating.classList.remove('rating--clicked');
        } else {
            rating.classList.add('rating--clicked');
        }
    })
})
