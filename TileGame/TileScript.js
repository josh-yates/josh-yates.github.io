// JavaScript source code


function GenerateTiles(){
    var TileArray = new Array(3);
    for (var i = 0; i < TileArray.length; i++) {
        TileArray[i] = new Array(3);
    }
    for (var i = 0; i < TileArray.length; i++) {
        for (var j = 0; j < TileArray[i].length; j++) {
            TileArray[i][j] = (i * 3) + j;
        }
    }
    //Randomly place tiles here
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