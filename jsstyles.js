let container = document.querySelector(".container");
//const reset = document.getElementById("reset");
//const cell = document.getElementsByName("grid-item");
const sizeButton = document.querySelector("button");


sizeButton.addEventListener('click' , ()=>{
  resetSize();
});

function resetSize(){
  let number = prompt("Choose your grid size! (1-100)");
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        makeRows(number); // call the createGrid function here and pass the number they entered as the argument. 
}

//makes grid
function makeRows(size) {
    //    resetSize(); // get rid of this as this was causing it to show the prompt again each time
    
    
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        
        for (let i = 0; i < size*size; i++) {
            
            let cell = document.createElement("div");
            cell.style.backgroundColor = "black";
            container.appendChild(cell);
    
            //change background color of a square on hover
            cell.addEventListener('mouseover', e=>{
                cell.style.backgroundColor = "white";
            })
    
    
            //function to reset the grid
            function clearGrid(){
                sizeButton.addEventListener('click', e=>{
                    cell.style.backgroundColor = "black"
               })
            }
            
    
            clearGrid();    
        }
    }
    
    makeRows(16);



















