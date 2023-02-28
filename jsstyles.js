const container = document.getElementById("container");
const reset = document.getElementById("reset");
const cell = document.getElementsByName("grid-item");



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

makeRows(16, 16);




  







