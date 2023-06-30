const addButton = document.querySelector('#addBtn');
const container3 = document.querySelector('.container3');



// add button feature
addButton.addEventListener('click', () => {
    if(container3.style.display === 'none') {
        container3.style.display = 'block';
    } else {
        container3.style.display = 'none';
    }
})