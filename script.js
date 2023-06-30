const addButton = document.querySelector("#addBtn");
const checkButton = document.querySelector(".check-icon");
const closeButton = document.querySelector(".close-icon");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");

// add button feature

// addButton.addEventListener('click', () => {
//     if(container3.style.display === 'none') {
//         container3.style.display = 'block';
//     } else {
//         container3.style.display = 'none';
//     }
// })

addButton.addEventListener("click", () => {
    container3.style.display = "block";
});

closeButton.addEventListener("click", () => {
    container3.style.display = "none";
});

// create notes feature

checkButton.addEventListener("click", () => {
    const notes = document.querySelector("#textNote").value;
    const div = document.createElement("div");
    const h1 = document.createElement("h1");

    if (notes === '') {
        alert('Please write notes');
    } else {
        h1.setAttribute(
            "style",
            "width: 250px;",
            "height: 250px;",
            "font-size: 26px;",
            `font-family: 'kalam';`,
            "padding: 25px;",
            "margin-top: 10px;",
            "overflow: hidden;",
        );
    
    
        h1.innerHTML = notes;
        div.appendChild(h1);
        container2.insertAdjacentElement("beforeend", div);
    
        div.style.height = ('250px');
        div.style.width = ('250px');
        div.style.padding = ('10px');
        div.style.boxShadow = ('0px 10px 24px 0px rgba(0, 0, 0, 0.50)')

        div.style.margin = margin();
        div.style.backgroundColor = color();
        div.style.rotate = rotate();
    }


});

function margin() {
    const randomMargin = ["15px", "10px", "20px", "-5px", "3px"];
    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function color() {
    const randomColor = [
        '#ff65a3',
        '#22b2da',
        '#c5d86d',
        '#7afcff',
        '#975a5e',
        '#a696c8',
        '#feff9c',
        '#fff740',
    ];
    return randomColor[Math.floor(Math.random() * randomColor.length)];
}

function rotate() {
    const randomRotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
    return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}
