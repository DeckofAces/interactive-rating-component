const ratings = document.querySelectorAll('.ratings');
// const rating = document.getElementsByTagName('li');

// for (let i = 0; i < ratings.length; i++) {
//     ratings[i].addEventListener('click', () => {
//         ratings.classList.toggle('rating');
//     });
// }

for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        if (ratings[i].classList.contains('rating')) {
            ratings[i].classList.remove('rating');
        } else {
            ratings[i].classList.add('rating');
        }
    });
}

// rating.addEventListener('click', () => {
//     if (rating.classList.contains('rating')) {
//         rating.classList.remove('rating');
//     } else {
//         rating.classList.add('rating');
//     }
// });

// console.log('Test 1');

// const rating = document.querySelectorAll('li');

// console.log('Test 2')

// rating.addEventListener('click', () => {
//     rating.setAttribute('class', 'rating');
// });

// console.log('Test 3');