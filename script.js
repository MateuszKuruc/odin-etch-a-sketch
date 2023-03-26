const container = document.querySelector('#container');
const sizeButton = document.querySelector('#sizeButton');

function getSize() {
    let userInput = prompt('Choose panel width between 2 and 99.');
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
  
// user input and box generation - working
sizeButton.addEventListener('click', changeSize);
resetButton.addEventListener('click', resetGrid);

// set up grid box and start drawing
startDraw