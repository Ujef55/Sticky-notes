const addButton = document.querySelector('#addBtn');
const checkButton = document.querySelector('.check-icon');
const closeButton = document.querySelector('.close-icon');
const container3 = document.querySelector('.container3');



// add button feature


// addButton.addEventListener('click', () => {
//     if(container3.style.display === 'none') {
//         container3.style.display = 'block';
//     } else {
//         container3.style.display = 'none';
//     }
// })

addButton.addEventListener('click', () => {
    container3.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    container3.style.display  = 'none';
})


