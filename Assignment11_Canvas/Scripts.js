var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.MX = 0;
Main.MY = 0;
Main.MousePressed = false;

Main.Box = function (xC, yC, c, d) {

    this.x = xC;
    this.y = yC;

    this.IsSelected = function () {
        if (!Main.MousePressed) return false;
        var withinXAxisCoordinates = Main.MX > this.X && Main.MX < (this.X + this.Width);
        var withinYAxisCoordinates = Main.MY > this.Y && Main.MY < (this.Y + this.Height);
        return withinXAxisCoordinates && withinYAxisCoordinates;
    }

    this.draw = function () {

        Main.Context.fillStyle = "#FF0000";
        Main.Context.fillRect(this.x, this.y, c, d);

        this.x += 2;

        if (this.x == 600)
        {
            this.x = 0;

        }

    }



}

Main.MouseUp = function (mouseEvent) {
    Main.MousePressed = false;
}

Main.MouseDown = function (mouseEvent) {
    Main.MousePressed = true;
}


Main.box1 = new Main.Box(0, 300, 75, 80);
Main.box2 = new Main.Box(120, 300, 75, 80);
Main.box3 = new Main.Box(240, 300, 75, 80);
Main.box4 = new Main.Box(360, 300, 75, 80);
Main.box5 = new Main.Box(480, 300, 75, 80);



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





Main.Animate = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);


    Main.box1.draw();
    Main.box2.draw();
    Main.box3.draw();
    Main.box4.draw();
    Main.box5.draw();



    //Output coordinate
	Main.Context.font = "30px Arial";
	Main.Context.fillText("X: " + Main.MX + "  Y: " + Main.MY, 100, 150);

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