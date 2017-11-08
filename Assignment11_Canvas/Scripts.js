var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.MX = 0;
Main.MY = 0;
Main.MousePressed = false;
Main.focusWidth = 90;
Main.focusHeight = 90;
Main.speed = 2;
Main.pause = false;
Main.followMe = false;
Main.initX = 0;
Main.initY = 300;
Main.offset = 120;
Main.focusNumber = 0;
Main.temp = 0;

Main.Box = function (xC, yC, c, d, index) {

    this.x = xC;
    this.y = yC;
    this.switch = false;
    this.number = index;

    this.draw = function () {

        //If mouseover
        if (Main.MX < this.x + 30 && Main.MX > this.x - 30 && Main.MY > 300 && Main.MY < 400) {
            Main.Context.fillStyle = "#FF0000";
            Main.Context.fillRect(this.x, this.y, Main.focusHeight, Main.focusWidth);
            this.switch = true;

            //If mousedown
            if (Main.followMe == true) {

                Main.focusNumber = this.number;
                this.x = Main.MX;
                Main.Context.fillRect(Main.MX, this.y, Main.focusHeight, Main.focusWidth);
                Main.temp = this.x;

            }
        }
        else {
            //If not under mouse
            Main.Context.fillStyle = "#FFFF00";
            this.switch = false;
            if (Main.followMe == true) {

                var newLocation = Main.temp + Main.offset;
                Main.temp = newLocation;
                this.x = newLocation;

                Main.Context.fillRect(this.x, this.y, c, d);
            }
            else {
                Main.Context.fillRect(this.x, this.y, c, d);
            }

        }    
            this.x += Main.speed;

            if (this.x >= 600) {

                this.x = this. x - 600;
            }

    }
}


Main.Boxes = [new Main.Box(Main.initX, Main.initY, 75, 80, 0), new Main.Box(Main.initX + (Main.offset), 300, 75, 80, 1), new Main.Box(Main.initX + (Main.offset * 2), 300, 75, 80, 2), new Main.Box(Main.initX + (Main.offset * 3), 300, 75, 80, 3), new Main.Box(Main.initX + (Main.offset) * 4, 300, 75, 80, 4)]


Main.MouseUp = function (mouseEvent) {
    Main.MousePressed = false;
}

Main.MouseDown = function (mouseEvent) {
    Main.MousePressed = true;
}

Main.Canvas.onmousemove = function(event)
{
	if (event.offsetX)
	{
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	}
	else if (event.layerX)
	{
		mouseX = event.layerX;
		mouseY = event.layerY;
	}

	Main.MX = mouseX;
	Main.MY = mouseY;
}


Main.checkForPause = function () {

    var total = 0;

    for (var i = 0; i < Main.Boxes.length; i++) {

        if (Main.Boxes[i].switch) {
            Main.pause = true;
            Main.speed = 0;
        }
        else {
            total++;
        }
    }

    if (total == 5) {
        Main.pause = false;
        Main.speed = 2;
    }
}

Main.holdBlock = function () {

    if (Main.pause == true && Main.MousePressed == true) {
        Main.followMe = true;
    }
    else {
        Main.followMe = false;
    }

}




Main.Animate = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);

    Main.checkForPause();
    Main.holdBlock();


    for (var i = 0; i < Main.Boxes.length; i++)
    {
        Main.Boxes[i].draw();
    }



    //Output coordinate
	Main.Context.font = "30px Arial";
	Main.Context.fillText("X: " + Main.MX + "  Y: " + Main.MY + " Speed is " + Main.speed + " " + Main.MousePressed, 100, 150);

	requestAnimFrame(function() { Main.Animate(); });
}



window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{
    Main.Animate();
    Main.Canvas.addEventListener('mouseup', function (mouseEvent) { Main.MouseUp(mouseEvent); });
    Main.Canvas.addEventListener('mousedown', function (mouseEvent) { Main.MouseDown(mouseEvent); });
});