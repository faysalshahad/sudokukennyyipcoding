
var numSelected = null;
var tileSelected = null;

let errors = 0;

let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];


let solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];

window.onload = setGame();

function setGame() {
    /**Generating digits 1-9 */
    for (let i = 1; i <= 9; i++) {
        /**<div id="1" class="number"> 1 </div> */
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        /**Selecting the number from number tile after clicking on it. */
        number.addEventListener("click", selectNumber);
        /**Adding class from CSS */
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            /**Assigning values from the game board array */
            // tile.innerText = board[r][c];
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                /**Adding class from CSS */
                tile.classList.add("tile-start");
            }
            if (r ===2 || r === 5) {
                /**Adding class from CSS */
                tile.classList.add("horizontal-line");
            }
            if (c ===2 || c === 5) {
                /**Adding class from CSS */
                tile.classList.add("vertical-line");
            }
            /**Assgining the numbers from number tile to an empty tile 
             * on the game board*/
            tile.addEventListener("click", selectTile);
            /**Adding class from CSS */
            tile.classList.add("tile");
            document.getElementById("board").append(tile);          
        }
        
    }
}

function selectNumber() {
    /**Removing the highlighted backgrounds from a previously selected tiles.*/
    if (numSelected != null) {
        /**removing class from CSS */
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    /**Adding class from CSS */
    numSelected.classList.add("number-selected");
}



function selectTile() {
    /**Selecting the number tile and assigning the value to an empty tile */
    if (numSelected) {
        if (this.innerText !="") {
            return;
        }
        //this.innerText = numSelected.id;
        /**"0-0", "0-1", "0-2"....."3-4", "3-5"..... */
        let coordinates = this.id.split("-"); // ["0", "0"]
        /**Since these numbers are now in string format we need to convert
         * them into integer by using parseint. ["0", "0"]*/
        let r = parseInt(coordinates[0]);
        let c = parseInt(coordinates[1]);

        if (solution[r][c] === numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors++;
            document.getElementById("errors").innerText = `Errors Made: ${errors}`;
        }
    }
}