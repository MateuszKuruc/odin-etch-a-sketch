const container = document.querySelector('#container');
const sizeButton = document.querySelector('#sizeButton');
const startButton = document.querySelector('#start');
const eraserButton = document.querySelector('#eraseButton');
const gridButton = document.querySelector('#gridButton');
const penButton = document.querySelector('#penButton');

function getSize() {
    let userInput = prompt('Adjust grid by choosing number between 2 and 99.');
    if (userInput == null || userInput <= 1 || userInput > 99) {
        userInput = prompt('Make sure the number is between 2 and 99!');
        if (userInput == null || userInput <= 1 || userInput > 99) {
            defaultSetting();
        }   else if (userInput != null && userInput >= 2 || userInput <= 99) {
            userChoice = Number(userInput);
            return userChoice;
        }
    }   else if (userInput != null && userInput >= 2 || userInput <= 99) {
        userChoice = Number(userInput);
        return userChoice;
    }   else {
        defaultSetting();
    }
}

// remove all divs and ask for user input to create new grid
function changeSize() {
    container.replaceChildren();
    startDraw();
}

// change background color to white and keep the grid size
function resetGrid() {
    let columns = document.getElementsByClassName ('column');
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = 'white';
    }
}

// create grid based on the user input
function makeGrid(number) {
    number = getSize();
    for(let i = 0; i < number; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let k = 0; k < number; k++) {
            let column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
        }
    } 
}

// set default grid if the user continuously fails to enter valid number
function defaultSetting() {
    let number = 16;
    for (let i = 0; i < number; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let k = 0; k < number; k++) {
            let column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
        }   
    }
}
// add event listener to all grid divs to change their color when hover
function startDraw() {
    makeGrid();
    let columns = document.getElementsByClassName ('column');
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener('mouseover', () => {
            columns[i].style.backgroundColor = 'black'
        })
    }
}

// add event listener to erase the color with the mouse hover
function eraseDraw() {
    let columns = document.getElementsByClassName ('column');
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener('mouseover', () => {
            columns[i].style.backgroundColor = ''
        })
    }
}

// add event listener to choose black pen
function choosePen() {
    let columns = document.getElementsByClassName ('column');
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener('mouseover', () => {
            columns[i].style.backgroundColor = 'black'
        })
    }
}

// remove grid 
function removeGrid() {
    let columns = document.getElementsByClassName ('column');
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.border = '0px';
        }
}
// button interactions
sizeButton.addEventListener('click', changeSize);
resetButton.addEventListener('click', resetGrid);
startButton.addEventListener('click', startDraw);
eraserButton.addEventListener('click', eraseDraw);
gridButton.addEventListener('click', removeGrid);
penButton.addEventListener('click', choosePen);