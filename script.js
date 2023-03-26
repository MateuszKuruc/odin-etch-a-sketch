const container = document.querySelector('#container');
const sizeButton = document.querySelector('#sizeButton');

function getSize() {
    // let userChoice = 0;
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
// user input and box generation - working
sizeButton.addEventListener('click', changeSize);
resetButton.addEventListener('click', resetGrid);

function changeSize() {
    container.replaceChildren();
    startDraw();
    
}

function resetGrid() {
    let columns = document.getElementsByClassName ('column');
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = 'white';
}
}

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

function startDraw() {
    makeGrid();
    let columns = document.getElementsByClassName ('column');
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener('mouseover', () => {
            columns[i].style.backgroundColor = 'black'
        })
    }
}
  
startDraw()