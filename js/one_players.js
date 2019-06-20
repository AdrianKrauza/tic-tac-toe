var positionWheel = new Array;
var positionAll = new Array;
var AipositionAll = new Array;
var positionCross = new Array;
var AipositionCross = new Array;
var AipositionFree = new Array;
var AiTwopositionCross = new Array;
for (o = 1; o <= 9; o++) {
    AipositionCross[o] = " "
}



function players(Y, X) {
    Game.win()
    Game.winGameOver()
    Game.play = 2
    players.GameStart = "false"


    if (X <= 1600 && Y <= 1600) {
        if (X == undefined) {
            X = 1000
        } else {
            
            players.color = Game.ctx_click.getImageData(X, Y, 1, 1).data[0]
           
            
        }
        players.wheel(players.color)
        players.forWheel = "true"
        for (var h = 0; h < positionAll.length; h++) {
            if (positionAll[h] == players.nrColor) {
                players.forWheel = "false"
                break
            }
        }
        if (players.forWheel == "true" || positionAll.length == 0) {
            players.drawWheel(players.nrColor)
            setTimeout(function () {
                if (Game.players != "two") {
                    ai(players.nrColor)
                }
                console.log(players.GameStart);
                
                players.GameStart = "true"
            }, 300);
        }
    }
    Game.win()
    Game.winGameOver()
}
players.wheel = function (nr) {
    if (nr != 0) {
        for (var i = 1; i <= 9; i++) {
            if (players.color / i == 25) {
                 players.nrColor = i;
              
                return
            }
        }
    }
}
players.drawWheel = function (nrColor) {

    positionWheel.push(players.nrColor)
    positionAll.push(players.nrColor)
    AipositionCross[nrColor] = "O"
    players.nrColor -= 1;
    players.nrColor *= 200;
    players.nrColor += 100;
    players.WheelY = players.nrColor;
    players.WheelX = players.nrColor;
    if (players.nrColor == 300) {
        players.WheelY -= 200
    } else if (players.nrColor == 500) {
        players.WheelY -= 400
    } else if (players.nrColor == 700) {
        players.WheelY -= 400
        players.WheelX -= 600
    } else if (players.nrColor == 900) {
        players.WheelY -= 600
        players.WheelX -= 600
    } else if (players.nrColor == 1100) {
        players.WheelY -= 800
        players.WheelX -= 600
    } else if (players.nrColor == 1300) {
        players.WheelY -= 800
        players.WheelX -= 1200
    } else if (players.nrColor == 1500) {
        players.WheelY -= 1000
        players.WheelX -= 1200
    } else if (players.nrColor == 1700) {
        players.WheelY -= 1200
        players.WheelX -= 1200
    }

    Game.ctx.beginPath();

    Game.ctx.arc(players.WheelX, players.WheelY, 75, 0, VAR.deg(360));
    Game.ctx.stroke();

}


