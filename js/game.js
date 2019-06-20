window.onload = function () {
    Game.init();
}
VAR = {
    fps: 60,
    W: 0,
    H: 0,
    lastTime: 0,
    lastUpdate: -1,
    rand: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    deg: function (deg) {
        return deg * Math.PI / 180;
    }
}
Game = {
    init: function () {

        Game.my_canvas = document.createElement('canvas');
        Game.my_canvas_click = document.createElement('canvas');
        Game.my_canvas_field = document.createElement('canvas');
        Game.ctx = Game.my_canvas.getContext('2d');
        Game.ctx_click = Game.my_canvas_click.getContext('2d');
        Game.ctx_field = Game.my_canvas_field.getContext('2d');
        Game.layout();
        window.addEventListener('resize', Game.layout, false);
        //    document.body.appendChild(Game.my_canvas_click);
        document.body.appendChild(Game.my_canvas_field);
        document.body.appendChild(Game.my_canvas);

        VAR.d = Math.min(VAR.W, VAR.H);
        Game.my_canvas.width = VAR.W;
        Game.my_canvas.height = VAR.H;
        Game.my_canvas_click.width = VAR.W;
        Game.my_canvas_click.height = VAR.H;
        Game.my_canvas_field.width = VAR.W;
        Game.my_canvas_field.height = VAR.H;

        players.start != "false"
        addEventListener('mousedown', function (e) {
            if (players.GameStart == "true") {


                Game.X = e.pageX - (window.innerWidth - 600) / 2
                Game.Y = e.pageY - 100
                //             
            }
            if (Game.winGame != "true" && players.GameStart == "true" && (innerWidth - 600) / 2 < Game.X + (window.innerWidth - 600) / 2 && (innerWidth - 600) / 2 + 600 > Game.X + (window.innerWidth - 600) / 2 && Game.Y + 100 > 100 && Game.Y + 100 < 700) {
                console.log(this);

                if (Game.players == "two" && Game.play == 1) {
                    players(Game.Y, Game.X);

                } else if (Game.players == "two" && Game.play == 2) {

                    Two_P(Game.Y, Game.X);
                } else {
                    players(Game.Y, Game.X);
                }

            };
        });

        //        Game.rest()
        Game.animationLoop();
    },
    layout: function (ev) {
        VAR.W = 600;
        VAR.H = 600;

    },
    animationLoop: function (time) {
        requestAnimationFrame(Game.animationLoop);
        if (time - VAR.lastTime >= 1000 / VAR.fps) {
            VAR.lastTime = time;
            field();
            Game.X = 1000
            Game.Y = 1000
        }
    },
}
Game.win = function () {
    Game.winCollateral(1, 2, 3)
    Game.winCollateral(4, 5, 6)
    Game.winCollateral(7, 8, 9)
    //
    Game.winCollateral(1, 4, 7)
    Game.winCollateral(2, 5, 8)
    Game.winCollateral(3, 6, 9)
    //
    Game.winCollateral(1, 5, 9)
    Game.winCollateral(3, 5, 7)
}
Game.winCollateral = function (p1, p2, p3) {
    if (positionAll.length == 9) {
        Game.winGame = "true"
        Game.winWho = "Remis"


    }
    for (var m = 0; m <= 5; m++) {
        for (var n = 0; n <= 5; n++) {
            for (var b = 0; b <= 5; b++) {
                if (positionWheel[n] == p1 && positionWheel[b] == p2 && positionWheel[m] == p3) {
                    Game.winGame = "true"
                    Game.winWho = "kółko"


                }
                if (positionWheel[n] == p2 && positionWheel[b] == p3 && positionWheel[m] == p1) {
                    Game.winGame = "true"
                    Game.winWho = "kółko"

                }
                if (positionWheel[n] == p3 && positionWheel[b] == p2 && positionWheel[m] == p1) {
                    Game.winGame = "true"
                    Game.winWho = "kółko"

                }
                if (positionCross[n] == p1 && positionCross[b] == p2 && positionCross[m] == p3) {
                    Game.winGame = "true"
                    Game.winWho = "krzyżyk"
                }
                if (positionCross[n] == p2 && positionCross[b] == p3 && positionCross[m] == p1) {
                    Game.winGame = "true"
                    Game.winWho = "krzyżyk"
                }
                if (positionCross[n] == p3 && positionCross[b] == p2 && positionCross[m] == p1) {
                    Game.winGame = "true"
                    Game.winWho = "krzyżyk"

                }

            }
        }
    }

}
let win = false
Game.winGameOver = function () {
  
    if (win == false) {
        if (Game.winWho == "krzyżyk") {
            Game.winCross += 1
            
            win = true
        } else if (Game.winWho == "kółko") {
            Game.winWheel += 1
            
            win = true
        }
    }

    if (Game.winGame == "true") {
        setTimeout(function () {
            $("canvas").hide();
            $("#win").html(Game.winWheel + ":" + Game.winCross);
            $("#win").show();
            $("#button").show();
            if (Game.winWho == "Remis") {
                $("#whoWin").html('Remis');
                  win = false
            } else {
                $("#whoWin").html('Wygrywa ' + Game.winWho);
                  win = false
            }
            $("#whoWin").show();
            $("#winGame").show();
        }, 500);


    }

}
$('#StartGame').click(function () {
    players.GameStart = "true"
    Game.winWheel = 0;
    Game.winCross = 0;
    Game.winWho = ""
    Game.winGame = "false"
    $("#menu").hide();
    $("canvas").show();

    Game.difficulty = $('input[name=radio1]:checked', '.difficulty').val();
    Game.players = $('input[name=radio2]:checked', '.players').val();

});
$('#nextGame').click(function () {
    Game.ctx.clearRect(0, 0, VAR.W, VAR.H);
    positionWheel = []
    positionAll = []
    positionCross = []
    Game.winWho = ""
    $("canvas").show();
    Game.winGame = "false"
    $("#win").hide();
    $("#button").hide();
    $("#whoWin").hide();

});
$('#goMenu').click(function () {
    Game.ctx.clearRect(0, 0, VAR.W, VAR.H);
    positionWheel = []
    positionAll = []
    positionCross = []
    Game.winWho = ""
    // Game.winGame = "false"
    $("#win").hide();
    $("#button").hide();
    $("#whoWin").hide();
    $("#winGame").hide();
    $("#menu").show();

});