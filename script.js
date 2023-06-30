const addButton = document.querySelector('#addBtn');
const checkButton = document.querySelector('.check-icon');
const closeButton = document.querySelector('.close-icon');
const container2 = document.querySelector('.container2');
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

// create notes feature

checkButton.addEventListener('click', () => {
    const notes = document.querySelector('#textNote').value;
    const div = document.createElement('div');
    const h1 = document.createElement('h1');

    h1.setAttribute('class', 'notes')

    div.innerHTML = notes;
    div.appendChild(h1);
    container2.appendChild(div);
})
