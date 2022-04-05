function getLength() {
    let input;
    do {
        input = +prompt('Size?')
    } while (input > 100 || input < 0 || !input);
    return input;
}

function removeGrid() {
    let rows = document.querySelectorAll('.row');
    for (let i = 0; i < rows.length; i++) {
        rows[i].remove();
    }
};

function addListeners() {
    document.querySelectorAll('.square').forEach((square) => {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'black';     
        });
    });
}

function createGrid(size) {
    removeGrid();
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        document.querySelector('.container').appendChild(row);
        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        };
    };
    addListeners();
};

createGrid(16);

document.querySelector('.eraser').addEventListener('click', function() {
    let length = getLength();
    createGrid(length);
    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'peachpuff';
    };
});