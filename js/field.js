function field() {
    Game.ctx_click.fillStyle = 'rgb(25,0,0)';
    Game.ctx_click.fillRect(0, 0, 200, 200);
    Game.ctx_click.fillStyle = 'rgb(100,0,0)';
    Game.ctx_click.fillRect(0, 200, 200, 200);
    Game.ctx_click.fillStyle = 'rgb(175,0,0)';  
    Game.ctx_click.fillRect(0, 400, 200, 200);
    Game.ctx_click.fillStyle = 'rgb(50,0,0)';
    Game.ctx_click.fillRect(200, 0, 200, 200);
    Game.ctx_click.fillStyle = 'rgb(125,0,0)';  
    Game.ctx_click.fillRect(200, 200, 200, 200);
    Game.ctx_click.fillStyle = 'rgb(200,0,0)';
    Game.ctx_click.fillRect(200, 400, 200, 200);
    Game.ctx_click.fillStyle = 'rgb(75,0,0)';
    Game.ctx_click.fillRect(400, 0, 200, 200);
    Game.ctx_click.fillStyle = 'rgb(150,0,0)';
    Game.ctx_click.fillRect(400, 200, 200, 200);
    Game.ctx_click.fillStyle = 'rgb(225,0,0)';
    Game.ctx_click.fillRect(400, 400, 200, 200);

    Game.ctx_field.strokeStyle = '#5d6162';
    Game.ctx_field.lineWidth = 3;
    Game.ctx_field.lineCap = 'round';
    Game.ctx_field.moveTo(200, 0);
    Game.ctx_field.lineTo(200, 600);
    Game.ctx_field.stroke();
    Game.ctx_field.moveTo(400, 0);
    Game.ctx_field.lineTo(400, 600);
    Game.ctx_field.stroke();
    Game.ctx_field.moveTo(0, 200);
    Game.ctx_field.lineTo(600, 200);
    Game.ctx_field.stroke();
    Game.ctx_field.moveTo(0, 400);
    Game.ctx_field.lineTo(600, 400);
    Game.ctx_field.stroke();

    Game.ctx.strokeStyle = '#b54b4f';
    Game.ctx.lineWidth = 5;
    Game.ctx.lineCap = 'round';

}