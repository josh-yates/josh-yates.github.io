// JavaScript source code

var i0 = 0;
var j0 = 0;

function Main() {
    var TileArray = GenerateTiles();
    UpdateTiles(TileArray);
    UpdateMoveableTiles(TileArray);
    //var StepCount = 0;
    //var ContinueGame = true;
    //while (ContinueGame) {
    //    UpdateTiles(TileArray);
    //    if (HasUserWon(TileArray)) {
    //        break;
    //    }

    //}

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function HasUserWon(TileArray) {
    for (var i = 0; i < TileArray.length; i++) {
        for (var j = 0; j < TileArray[i].length; j++) {
            if (TileArray[i][j] != (i * 3) + j) {
                return false;
            }
        }
    }
    return true;
}

function FindMoveableIDs(TileArray) {
    var IDArray = [];
    //search above
    if (i0 - 1 >= 0) {
        IDArray.push("t" + (((i0 - 1) * 3) + j0));
    }
    //search below
    if (i0 + 1 < TileArray.length) {
        IDArray.push("t" + (((i0 + 1) * 3) + j0));
    }
    //search left
    if (j0 - 1 >= 0) {
        IDArray.push("t" + (((i0) * 3) + j0 - 1));
    }
    //search right
    if (j0 + 1 < TileArray.length) {
        IDArray.push("t" + (((i0) * 3) + j0 + 1));
    }
    return IDArray;
}

function UpdateMoveableTiles(TileArray) {
    var IDArray = FindMoveableIDs(TileArray);
    for (var i = 0; i < IDArray.length; i++) {
        var TileDiv = document.getElementById(IDArray[i]);
        TileDiv.className = "MoveableTile";
    }
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
                i0 = i;
                j0 = j;
                var TileDiv = document.getElementById("t" + TileID);
                TileDiv.textContent = "";
                TileDiv.className = "EmptyTile";
            }
            else {
                var TileDiv = document.getElementById("t" + TileID);
                TileDiv.textContent = TileContents;
                TileDiv.className = "Tile";
            }
        }
    }
}