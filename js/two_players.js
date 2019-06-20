Two_P = function (Y,X) {
    Game.win()
    Game.winGameOver()
    Game.play = 1
    Two_P.start = "false"

    if (X <= 1600 && Y <= 1600) {
        if (X == undefined) {
            X = 1000
        } else {
            Two_P.color = Game.ctx_click.getImageData(X, Y, 1, 1).data[0]
           
        }

        Two_P.ColorNr(Two_P.color)
        
        
        Two_P.forWheel = "true"
        for (var h = 0; h < positionAll.length; h++) {
            if (positionAll[h] == Two_P.nrColor) {
                Two_P.forWheel = "false"
                break
            }
        }
        if (Two_P.forWheel == "true" || positionAll.length == 0) {
            Two_P.Draw()
            setTimeout(function () {
                Two_P.start = "true"
            }, 300);

        }
    }
   
    Game.win()
    Game.winGameOver()
}
Two_P.Draw = function () {
    if(Two_P.nr != 1){
        positionAll.push(Two_P.nrColor)
        positionCross.push(Two_P.nrColor)
    }
    if (Two_P.nrColor == 1) {
        Two_P.drawCollateral(50, 50, 150, 150, 50, 150, 150, 50)
    } else if (Two_P.nrColor == 2) {
        Two_P.drawCollateral(250, 50, 350, 150, 350, 50, 250, 150)
    } else if (Two_P.nrColor == 3) {
        Two_P.drawCollateral(450, 50, 550, 150, 550, 50, 450, 150)
    } else if (Two_P.nrColor == 4) {
        Two_P.drawCollateral(50, 250, 150, 350, 50, 350, 150, 250)
    } else if (Two_P.nrColor == 5) {
        Two_P.drawCollateral(250, 250, 350, 350, 350, 250, 250, 350)
    } else if (Two_P.nrColor == 6) {
        Two_P.drawCollateral(450, 250, 550, 350, 550, 250, 450, 350)
    } else if (Two_P.nrColor == 7) {
        Two_P.drawCollateral(50, 450, 150, 550, 50, 550, 150, 450)
    } else if (Two_P.nrColor == 8) {
        Two_P.drawCollateral(250, 450, 350, 550, 350, 450, 250, 550)
    } else if (Two_P.nrColor == 9) {
        Two_P.drawCollateral(450, 450, 550, 550, 550, 450, 450, 550)
    }

}
Two_P.drawCollateral = function (d1, d2, d3, d4, d5, d6, d7, d8) {
    Game.ctx.beginPath();
    Game.ctx.moveTo(d1, d2);
    Game.ctx.lineTo(d3, d4);
    Game.ctx.stroke();
    Game.ctx.beginPath();
    Game.ctx.moveTo(d5, d6);
    Game.ctx.lineTo(d7, d8);
    Game.ctx.stroke();
}

Two_P.ColorNr = function (nr) {
    if (nr != 0) {
        for (var i = 1; i <= 9; i++) {
            if (Two_P.color / i == 25) {
                return Two_P.nrColor = i;
            }
        }
    }
}
