function ai() {

    Game.win()
    ai.motion = null
    ai.drawCrossAuto = "true"
    if (positionAll.length != 9) {
        if (Game.winGame != "true") {
            if (Game.difficulty == "hard") {
                ai.blockingTraffic()
            }
            if (Game.difficulty == "impossible") {
                ai.DrawImpossible()
            }
            if (ai.drawCrossAuto == "true" && Game.difficulty != "impossible") {
                ai.drawCross()
            }
        }
    }
    Game.win()
    Game.winGameOver()
}
ai.drawCross = function () {

    if (positionAll.length < 9) {
        ai.crossFor = "false"
        do {
            ai.cross = VAR.rand(1, 9);
            ai.crossFor = "false"
            for (var i = 0; i < positionAll.length; i += 1) {
                if (positionAll[i] === ai.cross) {
                    ai.crossFor = "true"
                } else if (ai.crossFor != "true") {
                    ai.crossFor = "false"
                }
            }
        } while (ai.crossFor == "true")
        positionAll.push(ai.cross)
        positionCross.push(ai.cross)
        if (ai.cross == 1) {
            ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
        } else if (ai.cross == 2) {
            ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)
        } else if (ai.cross == 3) {
            ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
        } else if (ai.cross == 4) {
            ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)
        } else if (ai.cross == 5) {
            ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
        } else if (ai.cross == 6) {
            ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)
        } else if (ai.cross == 7) {
            ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)
        } else if (ai.cross == 8) {
            ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)
        } else if (ai.cross == 9) {
            ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
        }
    }
}

ai.blockingTraffic = function () {
    ai.drawCrossAuto = "true"
    ai.p3 = 0;

    if (positionAll[0] != 1 && positionAll[1] != 1 && positionAll[2] != 1 && positionAll[3] != 1 && positionAll[4] != 1 && positionAll[5] != 1 && positionAll[6] != 1 && positionAll[7] != 1 && positionAll[8] != 1 && positionAll[9] != 1) {
        ai.blockingTrafficCollateral(3, 2, 1)
        ai.blockingTrafficCollateral(7, 4, 1)
        ai.blockingTrafficCollateral(9, 5, 1)
    }
    if (positionAll[0] != 2 && positionAll[1] != 2 && positionAll[2] != 2 && positionAll[3] != 2 && positionAll[4] != 2 && positionAll[5] != 2 && positionAll[6] != 2 && positionAll[7] != 2 && positionAll[8] != 2 && positionAll[9] != 2) {
        ai.blockingTrafficCollateral(1, 3, 2)
        ai.blockingTrafficCollateral(8, 5, 2)
    }
    if (positionAll[0] != 3 && positionAll[1] != 3 && positionAll[2] != 3 && positionAll[3] != 3 && positionAll[4] != 3 && positionAll[5] != 3 && positionAll[6] != 3 && positionAll[7] != 3 && positionAll[8] != 3 && positionAll[9] != 3) {
        ai.blockingTrafficCollateral(1, 2, 3)
        ai.blockingTrafficCollateral(9, 6, 3)
        ai.blockingTrafficCollateral(7, 5, 3)
    }
    if (positionAll[0] != 4 && positionAll[1] != 4 && positionAll[2] != 4 && positionAll[3] != 4 && positionAll[4] != 4 && positionAll[5] != 4 && positionAll[6] != 4 && positionAll[7] != 4 && positionAll[8] != 4 && positionAll[9] != 4) {
        ai.blockingTrafficCollateral(1, 7, 4)
        ai.blockingTrafficCollateral(6, 5, 4)
    }
    if (positionAll[0] != 5 && positionAll[1] != 5 && positionAll[2] != 5 && positionAll[3] != 5 && positionAll[4] != 5 && positionAll[5] != 5 && positionAll[6] != 5 && positionAll[7] != 5 && positionAll[8] != 5 && positionAll[9] != 5) {
        ai.blockingTrafficCollateral(4, 6, 5)
        ai.blockingTrafficCollateral(2, 8, 5)

        ai.blockingTrafficCollateral(1, 9, 5)
        ai.blockingTrafficCollateral(3, 7, 5)
    }
    if (positionAll[0] != 6 && positionAll[1] != 6 && positionAll[2] != 6 && positionAll[3] != 6 && positionAll[4] != 6 && positionAll[5] != 6 && positionAll[6] != 6 && positionAll[7] != 6 && positionAll[8] != 6 && positionAll[9] != 6) {
        ai.blockingTrafficCollateral(4, 5, 6)
        ai.blockingTrafficCollateral(3, 9, 6)
    }

    if (positionAll[0] != 7 && positionAll[1] != 7 && positionAll[2] != 7 && positionAll[3] != 7 && positionAll[4] != 7 && positionAll[5] != 7 && positionAll[6] != 7 && positionAll[7] != 7 && positionAll[8] != 7 && positionAll[9] != 7) {
        ai.blockingTrafficCollateral(9, 8, 7)
        ai.blockingTrafficCollateral(1, 4, 7)
        ai.blockingTrafficCollateral(3, 5, 7)
    }
    if (positionAll[0] != 8 && positionAll[1] != 8 && positionAll[2] != 8 && positionAll[3] != 8 && positionAll[4] != 8 && positionAll[5] != 8 && positionAll[6] != 8 && positionAll[7] != 8 && positionAll[8] != 8 && positionAll[9] != 8) {
        ai.blockingTrafficCollateral(7, 9, 8)
        ai.blockingTrafficCollateral(2, 5, 8)
    }
    if (positionAll[0] != 9 && positionAll[1] != 9 && positionAll[2] != 9 && positionAll[3] != 9 && positionAll[4] != 9 && positionAll[5] != 9 && positionAll[6] != 9 && positionAll[7] != 9 && positionAll[8] != 9 && positionAll[9] != 9) {
        ai.blockingTrafficCollateral(7, 8, 9)
        ai.blockingTrafficCollateral(3, 6, 9)
        ai.blockingTrafficCollateral(1, 5, 9)
    }
    if (ai.p3 != 0) {
        positionAll.push(ai.p3)
        positionCross.push(ai.p3)
    }
    if (ai.p3 == 1) {
        ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
    } else if (ai.p3 == 2) {
        ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)
    } else if (ai.p3 == 3) {
        ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
    } else if (ai.p3 == 4) {
        ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)
    } else if (ai.p3 == 5) {
        ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
    } else if (ai.p3 == 6) {
        ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)
    } else if (ai.p3 == 7) {
        ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)
    } else if (ai.p3 == 8) {
        ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)
    } else if (ai.p3 == 9) {
        ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
    }
}

ai.drawCrossCollateral = function (d1, d2, d3, d4, d5, d6, d7, d8) {
    Game.ctx.beginPath();
    Game.ctx.moveTo(d1, d2);
    Game.ctx.lineTo(d3, d4);
    Game.ctx.stroke();
    Game.ctx.beginPath();
    Game.ctx.moveTo(d5, d6);
    Game.ctx.lineTo(d7, d8);
    Game.ctx.stroke();
}
ai.blockingTrafficCollateral = function (p1, p2, p3) {
    for (var c = 0; c <= 5; c++) {
        for (var v = 0; v <= 5; v++) {

            if (c != v) {
                if ((positionCross[c] == p1 && positionCross[v] == p2 && positionAll[0] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[1] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[2] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[3] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[4] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[5] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[6] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[7] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[8] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[9] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[0] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[1] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[2] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[3] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[4] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[5] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[6] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[7] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[8] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[9] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[0] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[1] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[2] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[3] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[4] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[5] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[6] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[7] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[8] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[9] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[0] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[1] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[2] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[3] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[4] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[5] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[6] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[7] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[8] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[9] != p3)) {
                    ai.drawCrossAuto = "false"
                    return ai.p3 = p3
                    break
                }
            }
        }
    }
}



ai.opening = function () {

    if (positionWheel[0] == 1 || positionWheel[0] == 3 || positionWheel[0] == 7 || positionWheel[0] == 9) {
        ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)

        ai.motion = true
        positionAll.push(5)
        positionCross.push(5)
    } else if (positionWheel[0] == 2 || positionWheel[0] == 4) {
        ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
        ai.motion = true
        positionAll.push(1)
        positionCross.push(1)
    } else if (positionWheel[0] == 8 || positionWheel[0] == 6) {
        ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
        ai.motion = true
        positionAll.push(9)
        positionCross.push(9)
    } else {
        ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)

        ai.motion = true
        positionAll.push(1)
        positionCross.push(1)
    }


}
ai.win = function () {
    ai.p4 = 0;

    if (positionAll[0] != 1 && positionAll[1] != 1 && positionAll[2] != 1 && positionAll[3] != 1 && positionAll[4] != 1 && positionAll[5] != 1 && positionAll[6] != 1 && positionAll[7] != 1 && positionAll[8] != 1 && positionAll[9] != 1) {
        ai.winCollateral(3, 2, 1)
        ai.winCollateral(7, 4, 1)
        ai.winCollateral(9, 5, 1)
    }
    if (positionAll[0] != 2 && positionAll[1] != 2 && positionAll[2] != 2 && positionAll[3] != 2 && positionAll[4] != 2 && positionAll[5] != 2 && positionAll[6] != 2 && positionAll[7] != 2 && positionAll[8] != 2 && positionAll[9] != 2) {
        ai.winCollateral(1, 3, 2)
        ai.winCollateral(8, 5, 2)
    }
    if (positionAll[0] != 3 && positionAll[1] != 3 && positionAll[2] != 3 && positionAll[3] != 3 && positionAll[4] != 3 && positionAll[5] != 3 && positionAll[6] != 3 && positionAll[7] != 3 && positionAll[8] != 3 && positionAll[9] != 3) {
        ai.winCollateral(1, 2, 3)
        ai.winCollateral(9, 6, 3)
        ai.winCollateral(7, 5, 3)
    }
    if (positionAll[0] != 4 && positionAll[1] != 4 && positionAll[2] != 4 && positionAll[3] != 4 && positionAll[4] != 4 && positionAll[5] != 4 && positionAll[6] != 4 && positionAll[7] != 4 && positionAll[8] != 4 && positionAll[9] != 4) {
        ai.winCollateral(1, 7, 4)
        ai.winCollateral(6, 5, 4)
    }
    if (positionAll[0] != 5 && positionAll[1] != 5 && positionAll[2] != 5 && positionAll[3] != 5 && positionAll[4] != 5 && positionAll[5] != 5 && positionAll[6] != 5 && positionAll[7] != 5 && positionAll[8] != 5 && positionAll[9] != 5) {
        ai.winCollateral(4, 6, 5)
        ai.winCollateral(2, 8, 5)

        ai.winCollateral(1, 9, 5)
        ai.winCollateral(3, 7, 5)
    }
    if (positionAll[0] != 6 && positionAll[1] != 6 && positionAll[2] != 6 && positionAll[3] != 6 && positionAll[4] != 6 && positionAll[5] != 6 && positionAll[6] != 6 && positionAll[7] != 6 && positionAll[8] != 6 && positionAll[9] != 6) {
        ai.winCollateral(4, 5, 6)
        ai.winCollateral(3, 9, 6)
    }

    if (positionAll[0] != 7 && positionAll[1] != 7 && positionAll[2] != 7 && positionAll[3] != 7 && positionAll[4] != 7 && positionAll[5] != 7 && positionAll[6] != 7 && positionAll[7] != 7 && positionAll[8] != 7 && positionAll[9] != 7) {
        ai.winCollateral(9, 8, 7)
        ai.winCollateral(1, 4, 7)
        ai.winCollateral(3, 5, 7)
    }
    if (positionAll[0] != 8 && positionAll[1] != 8 && positionAll[2] != 8 && positionAll[3] != 8 && positionAll[4] != 8 && positionAll[5] != 8 && positionAll[6] != 8 && positionAll[7] != 8 && positionAll[8] != 8 && positionAll[9] != 8) {
        ai.winCollateral(7, 9, 8)
        ai.winCollateral(2, 5, 8)
    }
    if (positionAll[0] != 9 && positionAll[1] != 9 && positionAll[2] != 9 && positionAll[3] != 9 && positionAll[4] != 9 && positionAll[5] != 9 && positionAll[6] != 9 && positionAll[7] != 9 && positionAll[8] != 9 && positionAll[9] != 9) {
        ai.winCollateral(7, 8, 9)
        ai.winCollateral(3, 6, 9)
        ai.winCollateral(1, 5, 9)
    }
    if (ai.p4 != 0) {
        positionAll.push(ai.p4)
        positionCross.push(ai.p4)

        ai.motion = true
    }
    if (ai.p4 == 1) {
        ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
    } else if (ai.p4 == 2) {
        ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)
    } else if (ai.p4 == 3) {
        ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
    } else if (ai.p4 == 4) {
        ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)
    } else if (ai.p4 == 5) {
        ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
    } else if (ai.p4 == 6) {
        ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)
    } else if (ai.p4 == 7) {
        ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)
    } else if (ai.p4 == 8) {
        ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)
    } else if (ai.p4 == 9) {
        ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
    }
}


ai.winCollateral = function (p1, p2, p3) {

    for (var c = 0; c <= 5; c++) {
        for (var v = 0; v <= 5; v++) {
            if (c != v) {
                if ((positionCross[c] == p1 && positionCross[v] == p2 && positionAll[0] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[1] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[2] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[3] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[4] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[5] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[6] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[7] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[8] != p3) || (positionCross[c] == p1 && positionCross[v] == p2 && positionAll[9] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[0] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[1] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[2] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[3] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[4] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[5] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[6] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[7] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[8] != p3) || (positionCross[v] == p1 && positionCross[c] == p2 && positionAll[9] != p3)) {
                    ai.p4 = p3

                    break
                }
            }
        }
    }

}

ai.block = function () {
    ai.f4 = 0;

    if (positionAll[0] != 1 && positionAll[1] != 1 && positionAll[2] != 1 && positionAll[3] != 1 && positionAll[4] != 1 && positionAll[5] != 1 && positionAll[6] != 1 && positionAll[7] != 1 && positionAll[8] != 1 && positionAll[9] != 1) {
        ai.blockCollateral(3, 2, 1)
        ai.blockCollateral(7, 4, 1)
        ai.blockCollateral(9, 5, 1)
    }
    if (positionAll[0] != 2 && positionAll[1] != 2 && positionAll[2] != 2 && positionAll[3] != 2 && positionAll[4] != 2 && positionAll[5] != 2 && positionAll[6] != 2 && positionAll[7] != 2 && positionAll[8] != 2 && positionAll[9] != 2) {
        ai.blockCollateral(1, 3, 2)
        ai.blockCollateral(8, 5, 2)
    }
    if (positionAll[0] != 3 && positionAll[1] != 3 && positionAll[2] != 3 && positionAll[3] != 3 && positionAll[4] != 3 && positionAll[5] != 3 && positionAll[6] != 3 && positionAll[7] != 3 && positionAll[8] != 3 && positionAll[9] != 3) {
        ai.blockCollateral(1, 2, 3)
        ai.blockCollateral(9, 6, 3)
        ai.blockCollateral(7, 5, 3)
    }
    if (positionAll[0] != 4 && positionAll[1] != 4 && positionAll[2] != 4 && positionAll[3] != 4 && positionAll[4] != 4 && positionAll[5] != 4 && positionAll[6] != 4 && positionAll[7] != 4 && positionAll[8] != 4 && positionAll[9] != 4) {
        ai.blockCollateral(1, 7, 4)
        ai.blockCollateral(6, 5, 4)
    }
    if (positionAll[0] != 5 && positionAll[1] != 5 && positionAll[2] != 5 && positionAll[3] != 5 && positionAll[4] != 5 && positionAll[5] != 5 && positionAll[6] != 5 && positionAll[7] != 5 && positionAll[8] != 5 && positionAll[9] != 5) {
        ai.blockCollateral(4, 6, 5)
        ai.blockCollateral(2, 8, 5)

        ai.blockCollateral(1, 9, 5)
        ai.blockCollateral(3, 7, 5)
    }
    if (positionAll[0] != 6 && positionAll[1] != 6 && positionAll[2] != 6 && positionAll[3] != 6 && positionAll[4] != 6 && positionAll[5] != 6 && positionAll[6] != 6 && positionAll[7] != 6 && positionAll[8] != 6 && positionAll[9] != 6) {
        ai.blockCollateral(4, 5, 6)
        ai.blockCollateral(3, 9, 6)
    }

    if (positionAll[0] != 7 && positionAll[1] != 7 && positionAll[2] != 7 && positionAll[3] != 7 && positionAll[4] != 7 && positionAll[5] != 7 && positionAll[6] != 7 && positionAll[7] != 7 && positionAll[8] != 7 && positionAll[9] != 7) {
        ai.blockCollateral(9, 8, 7)
        ai.blockCollateral(1, 4, 7)
        ai.blockCollateral(3, 5, 7)
    }
    if (positionAll[0] != 8 && positionAll[1] != 8 && positionAll[2] != 8 && positionAll[3] != 8 && positionAll[4] != 8 && positionAll[5] != 8 && positionAll[6] != 8 && positionAll[7] != 8 && positionAll[8] != 8 && positionAll[9] != 8) {
        ai.blockCollateral(7, 9, 8)
        ai.blockCollateral(2, 5, 8)
    }
    if (positionAll[0] != 9 && positionAll[1] != 9 && positionAll[2] != 9 && positionAll[3] != 9 && positionAll[4] != 9 && positionAll[5] != 9 && positionAll[6] != 9 && positionAll[7] != 9 && positionAll[8] != 9 && positionAll[9] != 9) {
        ai.blockCollateral(7, 8, 9)
        ai.blockCollateral(3, 6, 9)
        ai.blockCollateral(1, 5, 9)
    }
    if (ai.f4 != 0) {
        positionAll.push(ai.f4)
        positionCross.push(ai.f4)
        ai.motion = true
    }
    if (ai.f4 == 1) {
        ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
    } else if (ai.f4 == 2) {
        ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)
    } else if (ai.f4 == 3) {
        ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
    } else if (ai.f4 == 4) {
        ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)
    } else if (ai.f4 == 5) {
        ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
    } else if (ai.f4 == 6) {
        ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)
    } else if (ai.f4 == 7) {
        ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)
    } else if (ai.f4 == 8) {
        ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)
    } else if (ai.f4 == 9) {
        ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
    }
}


ai.blockCollateral = function (p1, p2, p3) {

    for (var c = 0; c <= 5; c++) {
        for (var v = 0; v <= 5; v++) {
            if (c != v) {
                if ((positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[0] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[1] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[2] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[3] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[4] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[5] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[6] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[7] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[8] != p3) || (positionWheel[c] == p1 && positionWheel[v] == p2 && positionAll[9] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[0] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[1] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[2] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[3] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[4] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[5] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[6] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[7] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[8] != p3) || (positionWheel[v] == p1 && positionWheel[c] == p2 && positionAll[9] != p3)) {
                    ai.f4 = p3

                    break
                }
            }
        }
    }

}
ai.fork = function () {
    ai.k2 = 0

    if (ai.k2 == 0) {
        ai.forkCollateral(1, 2, 3)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(2, 3, 1)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(3, 2, 1)
    }
    //
    if (ai.k2 == 0) {
        ai.forkCollateral(4, 5, 6)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(5, 6, 4)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(6, 5, 4)
    }
    //
    if (ai.k2 == 0) {
        ai.forkCollateral(7, 8, 9)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(8, 9, 7)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(9, 8, 7)
    }
    //
    if (ai.k2 == 0) {
        ai.forkCollateral(1, 4, 7)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(4, 7, 1)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(7, 4, 1)
    }
    //
    if (ai.k2 == 0) {
        ai.forkCollateral(2, 5, 8)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(5, 8, 2)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(5, 2, 8)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(8, 5, 2)
    }
    //

    if (ai.k2 == 0) {
        ai.forkCollateral(3, 6, 9)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(6, 9, 3)
    }
    if (ai.k2 == 0) {
        ai.forkCollateral(9, 6, 3)
    }

    if (ai.k2 != 0) {
        positionAll.push(ai.k2)
        positionCross.push(ai.k2)
    }
    if (ai.k2 == 1) {
        ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
    } else if (ai.k2 == 2) {
        ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)
    } else if (ai.k2 == 3) {
        ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
    } else if (ai.k2 == 4) {
        ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)
    } else if (ai.k2 == 5) {
        ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
    } else if (ai.k2 == 6) {
        ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)
    } else if (ai.k2 == 7) {
        ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)
    } else if (ai.k2 == 8) {
        ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)
    } else if (ai.k2 == 9) {
        ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
    }

} //2, 5, 7
ai.forkCollateral = function (z1, z2, z3) {
    for (var h = 0; h <= positionCross.length; h++) {
        for (var r = 0; r <= positionWheel.length; r++) {
            for (var f = 0; f <= positionAll.length; f++) {
                for (var k = 0; k <= positionAll.length; k++) {
                    if (positionWheel[r] != z1 && positionCross[h] == z1 && positionAll[f] != z2 && positionAll[k] != z3) {
                        for (let j = 0; j <= positionCross.length; j++) {
                            for (let i = 0; i <= positionWheel.length; i++) {
                                for (let b = 0; b <= positionWheel.length; b++) {

                                    if (positionCross[j] == 5 && (([positionWheel[i] == 1] && positionWheel[b] == 9) || ([positionWheel[i] == 3] && positionWheel[b] == 7))) {
                                        console.log(positionCross[j] == 5 && (([positionWheel[i] == 1] && positionWheel[b] == 9) || ([positionWheel[i] == 3] && positionWheel[b] == 7)))
                                        if (positionAll[0] != 2 && positionAll[1] != 2 && positionAll[2] != 2 && positionAll[3] != 2 && positionAll[4] != 2 && positionAll[5] != 2 && positionAll[6] != 2 && positionAll[7] != 2 && positionAll[8] != 2) {

                                            ai.k2 = 2
                                            ai.motion = true

                                            return
                                            break
                                        } else if (positionAll[0] != 4 && positionAll[1] != 4 && positionAll[2] != 4 && positionAll[3] != 4 && positionAll[4] != 4 && positionAll[5] != 4 && positionAll[6] != 4 && positionAll[7] != 4 && positionAll[8] != 4) {


                                            ai.motion = true
                                            ai.k2 = 4
                                            return
                                            break

                                        } else if (positionAll[0] != 6 && positionAll[1] != 6 && positionAll[2] != 6 && positionAll[3] != 6 && positionAll[4] != 6 && positionAll[5] != 6 && positionAll[6] != 6 && positionAll[7] != 6 && positionAll[8] != 6) {


                                            ai.motion = true
                                            ai.k2 = 6
                                            return
                                            break
                                        } else if (positionAll[0] != 8 && positionAll[1] != 8 && positionAll[2] != 8 && positionAll[3] != 8 && positionAll[4] != 8 && positionAll[5] != 8 && positionAll[6] != 8 && positionAll[7] != 8 && positionAll[8] != 8) {

                                            ai.k2 = 8
                                            ai.motion = true

                                            return
                                            break
                                        }


                                    } else if (j == positionCross.length) {

                                        if (positionAll[0] != 1 && positionAll[1] != 1 && positionAll[2] != 1 && positionAll[3] != 1 && positionAll[4] != 1 && positionAll[5] != 1 && positionAll[6] != 1 && positionAll[7] != 1 && positionAll[8] != 1) {


                                            ai.motion = true
                                            ai.k2 = 1
                                            break
                                        } else if (positionAll[0] != 3 && positionAll[1] != 3 && positionAll[2] != 3 && positionAll[3] != 3 && positionAll[4] != 3 && positionAll[5] != 3 && positionAll[6] != 3 && positionAll[7] != 3 && positionAll[8] != 3) {


                                            ai.motion = true
                                            ai.k2 = 3
                                            break
                                        } else if (positionAll[0] != 7 && positionAll[1] != 7 && positionAll[2] != 7 && positionAll[3] != 7 && positionAll[4] != 7 && positionAll[5] != 7 && positionAll[6] != 7 && positionAll[7] != 7 && positionAll[8] != 7) {

                                            ai.motion = true
                                            ai.k2 = 7
                                            break
                                        } else if (positionAll[0] != 9 && positionAll[1] != 9 && positionAll[2] != 9 && positionAll[3] != 9 && positionAll[4] != 9 && positionAll[5] != 9 && positionAll[6] != 9 && positionAll[7] != 9 && positionAll[8] != 9) {

                                            ai.motion = true
                                            ai.k2 = 9
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


ai.forkBlock = function () {
    if (positionAll.length > 1 && (positionAll[0] != 5 && positionAll[1] != 5 && positionAll[2] != 5 && positionAll[3] != 5 && positionAll[4] != 5 && positionAll[0] != 5 && positionAll[5] != 5 && positionAll[6] != 5 && positionAll[7] != 5 && positionAll[8] != 5 && positionAll[9] != 5)) {
        for (const p in positionAll) {
            if (p != 2) {
                ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)
                positionAll.push(2)
                positionCross.push(2)
                ai.motion = true
                return
            } else if (p != 4) {
                ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)
                positionAll.push(4)
                positionCross.push(4)
                ai.motion = true
                return
            } else if (p != 5) {
                ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
                positionAll.push(5)
                positionCross.push(5)
                ai.motion = true
                return
            } else if (p != 6) {
                ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)
                positionAll.push(6)
                positionCross.push(6)
                ai.motion = true
                return
            } else if (p != 8) {
                ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)
                positionAll.push(8)
                positionCross.push(8)
                ai.motion = true
                return
            }
        }

    }
    ai.l1 = 0

    if (ai.l1 == 0) {
        ai.forkCollateral(1, 2, 3)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(2, 3, 1)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(3, 2, 1)
    }
    //
    if (ai.l1 == 0) {
        ai.forkCollateral(4, 5, 6)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(5, 6, 4)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(6, 5, 4)
    }
    //
    if (ai.l1 == 0) {
        ai.forkCollateral(7, 8, 9)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(8, 9, 7)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(9, 8, 7)
    }
    //
    if (ai.l1 == 0) {
        ai.forkCollateral(1, 4, 7)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(4, 7, 1)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(7, 4, 1)
    }
    //
    if (ai.l1 == 0) {
        ai.forkCollateral(2, 5, 8)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(5, 8, 2)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(8, 5, 2)
    }
    //
    if (ai.l1 == 0) {
        ai.forkCollateral(3, 6, 9)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(6, 9, 3)
    }
    if (ai.l1 == 0) {
        ai.forkCollateral(9, 6, 3)
    }

    if (ai.l1 != 0) {
        positionAll.push(ai.l1)
        positionCross.push(ai.l1)
    }
    if (ai.z1 == 1) {
        ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
    } else if (ai.l1 == 2) {
        ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)
    } else if (ai.l1 == 3) {
        ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
    } else if (ai.l1 == 4) {
        ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)
    } else if (ai.l1 == 5) {
        ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
    } else if (ai.l1 == 6) {
        ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)
    } else if (ai.l1 == 7) {
        ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)
    } else if (ai.l1 == 8) {
        ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)
    } else if (ai.l1 == 9) {
        ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
    }
}
ai.forkBlockCollateral = function (z1, z2, z3) {
    for (var h = 0; h <= positionWheel.length; h++) {
        for (var r = 0; r <= positionCross.length; r++) {
            for (var f = 0; f <= positionAll.length; f++) {
                for (var k = 0; k <= positionAll.length; k++) {
                    if (positionWheel[h] != z1 && positionCross[r] == z1 && positionAll[f] != z2 && positionAll[k] != z3) {
                        if (positionAll[0] != 2 && positionAll[1] != 2 && positionAll[2] != 2 && positionAll[3] != 2 && positionAll[4] != 2 && positionAll[5] != 2 && positionAll[6] != 2 && positionAll[7] != 2 && positionAll[8] != 2) {
                            ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
                            ai.l2 = 2
                            ai.motion = true
                            break
                        } else if (positionAll[0] != 4 && positionAll[1] != 3 && positionAll[2] != 4 && positionAll[3] != 4 && positionAll[4] != 4 && positionAll[5] != 4 && positionAll[6] != 4 && positionAll[7] != 4 && positionAll[8] != 4) {
                            ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
                            ai.l2 = 4
                            ai.motion = true
                            break

                        } else if (positionAll[0] != 6 && positionAll[1] != 6 && positionAll[2] != 6 && positionAll[3] != 6 && positionAll[4] != 6 && positionAll[5] != 6 && positionAll[6] != 6 && positionAll[7] != 6 && positionAll[8] != 6) {
                            ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
                            ai.l2 = 6
                            ai.motion = true
                            break
                        } else if (positionAll[0] != 8 && positionAll[1] != 9 && positionAll[2] != 8 && positionAll[3] != 8 && positionAll[4] != 8 && positionAll[5] != 8 && positionAll[6] != 8 && positionAll[7] != 8 && positionAll[8] != 8) {
                            ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
                            ai.l2 = 8
                            ai.motion = true
                            break
                        }
                    }
                }
            }
        }
    }
}
ai.playCenter = function () {
    if (positionAll[0] != 5 && positionAll[1] != 5 && positionAll[2] != 5 && positionAll[3] != 5 && positionAll[4] != 5 && positionAll[5] != 5 && positionAll[6] != 5 && positionAll[7] != 5 && positionAll[8] != 5) {
        ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
        positionAll.push(5)
        positionCross.push(5)
        ai.motion = true
    }
}






ai.oppositeCorner = function () {
    if ((positionAll[0] != 1 && positionAll[1] != 1 && positionAll[2] != 1 && positionAll[3] != 1 && positionAll[4] != 1) && (positionAll[0] != 9 && positionAll[1] != 9 && positionAll[2] != 5 && positionAll[3] != 9 && positionAll[4] != 9 && positionAll[5] != 9 && positionAll[6] != 9 && positionAll[7] != 9 && positionAll[8] != 1)) {
        positionAll.push(9)
        positionCross.push(9)
        ai.motion = true
        ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
    } else if ((positionAll[0] != 9 && positionAll[1] != 9 && positionAll[2] != 9 && positionAll[3] != 9 && positionAll[4] != 9) && (positionAll[0] != 1 && positionAll[1] != 1 && positionAll[2] != 5 && positionAll[3] != 1 && positionAll[4] != 1 && positionAll[5] != 1 && positionAll[6] != 1 && positionAll[7] != 1 && positionAll[8] != 1)) {
        positionAll.push(1)
        positionCross.push(1)
        ai.motion = true
        ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
    } else if ((positionAll[0] != 3 && positionAll[1] != 3 && positionAll[2] != 3 && positionAll[3] != 3 && positionAll[4] != 3) && (positionAll[0] != 7 && positionAll[1] != 7 && positionAll[2] != 5 && positionAll[3] != 7 && positionAll[4] != 7 && positionAll[5] != 7 && positionAll[6] != 7 && positionAll[7] != 7 && positionAll[8] != 1)) {
        positionAll.push(7)
        positionCross.push(7)
        ai.motion = true
        ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)
    } else if ((positionAll[0] != 7 && positionAll[1] != 7 && positionAll[2] != 7 && positionAll[3] != 7 && positionAll[4] != 7) && (positionAll[0] != 3 && positionAll[1] != 3 && positionAll[2] != 5 && positionAll[3] != 3 && positionAll[4] != 3 && positionAll[5] != 3 && positionAll[6] != 3 && positionAll[7] != 3 && positionAll[8] != 1)) {
        positionAll.push(3)
        positionCross.push(3)
        ai.motion = true
        ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
    }
}


ai.emptyCorner = function () {

    if (positionAll[0] != 1 && positionAll[1] != 1 &&  positionAll[2] != 1 &&  positionAll[3] != 1 &&  positionAll[4] != 1 && positionAll[5] != 1 &&  positionAll[6] != 1 &&  positionAll[7] != 1 && positionAll[8] != 1) {
        positionAll.push(1)
        positionCross.push(1)
        ai.motion = true
        ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)

    } else if (positionAll[0] != 3 && positionAll[1] != 3 &&  positionAll[2] != 3 &&  positionAll[3] != 3 &&  positionAll[4] != 3 && positionAll[5] != 3 &&  positionAll[6] != 3 &&  positionAll[7] != 3 && positionAll[8] != 3) {
        positionAll.push(3)
        positionCross.push(3)
        ai.motion = true
        ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)

    } else if (positionAll[0] != 7 && positionAll[1] != 1 &&  positionAll[2] != 7 &&  positionAll[3] != 7 &&  positionAll[4] != 7 && positionAll[5] != 7 &&  positionAll[6] != 7 &&  positionAll[7] != 7 && positionAll[8] != 7) {
        positionAll.push(7)
        positionCross.push(7)
        ai.motion = true
        ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)

    } else if (positionAll[0] != 9 && positionAll[1] != 9 &&  positionAll[2] != 9 &&  positionAll[3] != 9 &&  positionAll[4] != 9 && positionAll[5] != 9 &&  positionAll[6] != 9 &&  positionAll[7] != 9 && positionAll[8] != 9) {
        positionAll.push(9)
        positionCross.push(9)
        ai.motion = true
        ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
    }
}
ai.emptySide = function () {
    if (positionAll[0] != 2 && positionAll[1] != 2 &&  positionAll[2] != 2 &&  positionAll[3] != 2 &&  positionAll[4] != 2 && positionAll[5] != 2 &&  positionAll[6] != 2 &&  positionAll[7] != 2 && positionAll[8] != 2) {
        positionAll.push(2)
        positionCross.push(2)
        ai.motion = true
        ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)

    } else if (positionAll[0] != 4 && positionAll[1] != 4 &&  positionAll[2] != 4 &&  positionAll[3] != 4 &&  positionAll[4] != 4 && positionAll[5] != 4 &&  positionAll[6] != 4 &&  positionAll[7] != 4 && positionAll[8] != 4) {
        positionAll.push(4)
        positionCross.push(4)
        ai.motion = true
        ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)

    } else if (positionAll[0] != 6 && positionAll[1] != 6 &&  positionAll[2] != 6 &&  positionAll[3] != 6 &&  positionAll[4] != 6 && positionAll[5] != 6 &&  positionAll[6] != 6 &&  positionAll[7] != 6 && positionAll[8] != 6) {
        positionAll.push(6)
        positionCross.push(6)
        ai.motion = true
        ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)

    } else if (positionAll[0] != 8 && positionAll[1] != 8 &&  positionAll[2] != 8 &&  positionAll[3] != 8 &&  positionAll[4] != 8 && positionAll[5] != 8 &&  positionAll[6] != 8 &&  positionAll[7] != 8 && positionAll[8] != 8) {
        positionAll.push(8)
        positionCross.push(8)
        ai.motion = true
        ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)

    }
}
ai.DrawImpossible = function () {
    if (ai.motion == null && positionCross.length == 0) {
        ai.opening()

    }
    if (ai.motion == null) {
        ai.win()
    }
    if (ai.motion == null) {
        ai.block()
    }
    if (ai.motion == null) {

        ai.fork()
    }
    if (ai.motion == null) {

        ai.forkBlock()
    }
    if (ai.motion == null) {

        ai.playCenter()
    }
    if (ai.motion == null) {

        ai.playCenter()
    }
    if (ai.motion == null) {

        ai.oppositeCorner()
    }
    if (ai.motion == null) {

        ai.emptyCorner()
    }
    if (ai.motion == null) {

        ai.emptySide()
    }
}



ai.DrawImpossibleCollateral = function (p1, p2, p3) {

    if (p1 == 10) {

        if (positionWheel[0] == p2) {
            if (p3 == 1) {
                ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
                positionAll.push(p3)
                positionCross.push(p3)
                AipositionCross[p3] = "X"
            } else if (p3 == 2) {
                ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)
                positionAll.push(p3)
                positionCross.push(p3)
                AipositionCross[p3] = "X"
            } else if (p3 == 3) {
                ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
                positionAll.push(p3)
                positionCross.push(p3)
                AipositionCross[p3] = "X"
            } else if (p3 == 4) {
                ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)
                positionAll.push(p3)
                positionCross.push(p3)
                AipositionCross[p3] = "X"
            } else if (p3 == 5) {
                ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
                positionAll.push(p3)
                positionCross.push(p3)
                AipositionCross[p3] = "X"
            } else if (p3 == 6) {
                ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)
                positionAll.push(p3)
                positionCross.push(p3)
                AipositionCross[p3] = "X"
            } else if (p3 == 7) {
                ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)
                positionAll.push(p3)
                positionCross.push(p3)
                AipositionCross[p3] = "X"
            } else if (p3 == 8) {
                ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)
                positionAll.push(p3)
                positionCross.push(p3)
                AipositionCross[p3] = "X"
            } else if (p3 == 9) {
                ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
                positionAll.push(p3)
                positionCross.push(p3)
                AipositionCross[p3] = "X"
            }


        }

    } else
    if (positionWheel[0] == p1 && positionWheel[1] == p2) {
        if (p3 == 1) {
            ai.drawCrossCollateral(50, 50, 150, 150, 50, 150, 150, 50)
            positionAll.push(p3)
            positionCross.push(p3)
            AipositionCross[p3] = "X"
        } else if (p3 == 2) {
            ai.drawCrossCollateral(250, 50, 350, 150, 350, 50, 250, 150)
            positionAll.push(p3)
            positionCross.push(p3)
            AipositionCross[p3] = "X"
        } else if (p3 == 3) {
            ai.drawCrossCollateral(450, 50, 550, 150, 550, 50, 450, 150)
            positionAll.push(p3)
            positionCross.push(p3)
            AipositionCross[p3] = "X"
        } else if (p3 == 4) {
            ai.drawCrossCollateral(50, 250, 150, 350, 50, 350, 150, 250)
            positionAll.push(p3)
            positionCross.push(p3)
            AipositionCross[p3] = "X"
        } else if (p3 == 5) {
            ai.drawCrossCollateral(250, 250, 350, 350, 350, 250, 250, 350)
            positionAll.push(p3)
            positionCross.push(p3)
            AipositionCross[p3] = "X"
        } else if (p3 == 6) {
            ai.drawCrossCollateral(450, 250, 550, 350, 550, 250, 450, 350)
            positionAll.push(p3)
            positionCross.push(p3)
            AipositionCross[p3] = "X"
        } else if (p3 == 7) {
            ai.drawCrossCollateral(50, 450, 150, 550, 50, 550, 150, 450)
            positionAll.push(p3)
            positionCross.push(p3)
            AipositionCross[p3] = "X"
        } else if (p3 == 8) {
            ai.drawCrossCollateral(250, 450, 350, 550, 350, 450, 250, 550)
            positionAll.push(p3)
            positionCross.push(p3)
            AipositionCross[p3] = "X"
        } else if (p3 == 9) {
            ai.drawCrossCollateral(450, 450, 550, 550, 550, 450, 450, 550)
            positionAll.push(p3)
            positionCross.push(p3)
            AipositionCross[p3] = "X"
        }
    }
    //    AipositionCross = AiTwopositionCross
}

ai.AipositionCross = function () {
    console.log("    ")
    console.log(AiTwopositionCross[1] + " " + AiTwopositionCross[2] + " " + AiTwopositionCross[3])
    console.log(AiTwopositionCross[4] + " " + AiTwopositionCross[5] + " " + AiTwopositionCross[6])
    console.log(AiTwopositionCross[7] + " " + AiTwopositionCross[8] + " " + AiTwopositionCross[9])
}