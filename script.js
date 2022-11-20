const square = document.querySelector('#square');          //this is the square that contains grid
const largeSquares = document.querySelector('#large');
const mediumSquares = document.querySelector('#medium');
const smallSquares = document.querySelector('#small');
const erease = document.querySelector('#erease');
const colourDiv = document.querySelector('#colour');
let colour = '#ceaa9a';
const div = document.createElement('div');  

let size = 20;
for (let i = 0; i < size**2 ; i++) {    // This creates the exact number of divs inside the square
    createDiv(size);
}

//This function creates div inside the square

function createDiv(size) {
    let div = document.createElement('div');  
    div.setAttribute('style', 'color: blue; background: #f8ebe6; opacity: 0.7; box-shadow:0px 0px 0px 0.3px #8d6554 inset;');
    div.style.height = `${430/size}px`; //height of the square divided by number of divs inside
    div.style.width = `${430/size}px`;  //width of the square divided by number of divs inside
    square.appendChild(div);
    div.addEventListener('mouseenter', addColour);
    return div;
    
}


largeSquares.addEventListener("click", () => {
    square.textContent = '';                // removing all divs inside the square
    size = 10;
    for (let i = 0; i < size**2 ; i++) {    // This creates the exact number of divs inside the square
        createDiv(size);
    } 
});


mediumSquares.addEventListener("click", () => {
    square.textContent = '';                // removing all divs inside the square
    size = 20;
    for (let i = 0; i < size**2 ; i++) {    // This creates the exact number of divs inside the square
        createDiv(size);
    }
});
   
smallSquares.addEventListener("click", () => {
    square.textContent = '';                // removing all divs inside the square
    size = 50;
    for (let i = 0; i < size**2 ; i++) {    // This creates the exact number of divs inside the square
        createDiv(size);
    }
});


erease.addEventListener("click", () => {    // clearing of the square
    return square.textContent = '';
})             


function addColour () {
    this.style.backgroundColor = colour;
}

function changeColour(choice) {
    colour = choice;
}

   



