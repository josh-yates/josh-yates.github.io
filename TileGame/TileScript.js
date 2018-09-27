// JavaScript source code

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GenerateTiles(){
    var TileArray = new Array(3);
    var IntArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 0; i < TileArray.length; i++) {
        TileArray[i] = new Array(3);
    }
    for (var i = 0; i < TileArray.length; i++) {
        for (var j = 0; j < TileArray[i].length; j++) {
            //Generate a random position in the int array, assign the value, then remove that element
            var RandomPos = getRandomInt(0, IntArray.length - 1);
            TileArray[i][j] = IntArray[RandomPos];
            IntArray.splice(RandomPos, 1);
        }
    }
    return TileArray;
}

function UpdateTiles(TileArray) {
    for (var i = 0; i < TileArray.length; i++) {
        for (var j = 0; j < TileArray[i].length; j++) {
            var TileID = (i * 3) + j;
            var TileContents = TileArray[i][j];
            if (TileContents == 0) {
                var TileDiv = document.getElementById("t" + TileID);
                TileDiv.textContent = "";
                TileDiv.style.borderStyle = "none";
                TileDiv.style.backgroundColor = "dimgrey";
            }
            else {
                var TileDiv = document.getElementById("t" + TileID);
                TileDiv.textContent = TileContents;
                TileDiv.style.borderStyle = "solid";
                TileDiv.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            }
        }
    }
}

function Main() {
    var TileArray = GenerateTiles();
    UpdateTiles(TileArray);
}