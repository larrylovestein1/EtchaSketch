const container = document.getElementById("container");
const reset = document.getElementById("reset");
const cell = document.getElementsByName("grid-item");
const sizeButton = document.getElementById("prompt");



//makes grid
function makeRows(rows,cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover',changeColors); 
    //created nested function to use the cell variable inside
    function changeColors() {
      cell.style.backgroundColor = 'blue';
    };
    //created another nested function to access the cell variable 
    //bc i cant access it outside of this scope, it works okay??..
    reset.addEventListener('click' , resetGrid);
    function resetGrid() {
      cell.style.backgroundColor = 'grey';
      console.log('somehow, this is working , progamming is beautiful huh?');
    };
    cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16,16); //default grid size 



sizeButton.addEventListener('click' , newGrid);
// gather user input to use inside of the function for a new gridsize
function newGrid() {
  let userInput = prompt("Choose Grid Size");
  console.log(userInput);
  makeRows(userInput,userInput);
};






  







