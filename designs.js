// Select color input
const colorPicked = document.querySelector("#colorPicker");

// Select size input by getting size from form
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");

//user query selector to get all input for grid size form
const gridSize = document.querySelector("#sizePicker");

// grid
const grid = document.querySelector("#pixelCanvas");


//get grid size the submit button
gridSize.addEventListener("submit", function (submit){
//will stop event listener from making grid and will clear grid
  submit.preventDefault();

  while(grid.hasChildNodes()){
    grid.removeChild(grid.firstChild)
  }

  // When size is submitted by the user, call makeGrid()
  makeGrid(height.value, width.value);

});

//Creates the grid and has to start at zero or you will get an error
function makeGrid(height, width) {
  for (let i = 0; i < height; i++){
      // Insert a row
      let row = grid.insertRow(i);
        //insert column
      for (let j = 0; j < width; j++){
          let column = row.insertCell(j);

          //Takes the cell and assigns the selected color
          column.addEventListener("click", function (colorEvent){
              colorEvent.preventDefault();
              column.style.backgroundColor = colorPicked.value;
          });
      };
  };
};
