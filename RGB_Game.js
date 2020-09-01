//@author :Vipul Rathod

var color = genraterandomcolor(6);
var pickedColor = colorpick();
var squares = document.querySelectorAll(".square");
var colordisp = document.getElementById("colordisp");
var msgdisp = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");
var numberOfsquare = 6;

colordisp.textContent = pickedColor;

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numberOfsquare = 3;
	color = genraterandomcolor(numberOfsquare);
	pickedColor = colorpick();
	colordisp.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(color[i])
		{
			squares[i].style.background =color[i];
		}
		else
		{
			squares[i].style.display ="none";

		}

	}
	h1.style.background="darkturquoise";
	msgdisp.textContent = " ";

})

hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numberOfsquare = 6;
	color = genraterandomcolor(numberOfsquare);
	pickedColor = colorpick();
	colordisp.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background =color[i];
		squares[i].style.display ="block";

	}
	h1.style.background="darkturquoise";
	msgdisp.textContent = " ";

})


resetButton.addEventListener("click", function(){
	
	color = genraterandomcolor(numberOfsquare);
	pickedColor = colorpick();
	colordisp.textContent = pickedColor;
	for(var i=0; i<squares.length;i++)
	{
		squares[i].style.background = color[i];
	}
	h1.style.background="darkturquoise";
	msgdisp.textContent = " ";
	resetButton.textContent = "New Color";



})
for(var i=0; i<squares.length;i++)
{
	squares[i].style.background = color[i];
	squares[i].addEventListener("click",function()
	{
		var clickedcolor = this.style.background;

		if(clickedcolor == pickedColor)
		{
			msgdisp.textContent = "Correct!";
			changecolor(clickedcolor);
			h1.style.background = clickedcolor;
			resetButton.textContent = "Play Again?";

		}
		else
		{
			this.style.background = "black";
			msgdisp.textContent = "Try Again";
		}
	})

}
function changecolor(color)
{
	for(var i=0; i<squares.length;i++)
	{
		squares[i].style.background = color;
	}
}
function colorpick()
{
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}
function randomcolor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256); 
	return "rgb("+r+", "+g+", "+b+")";
}
function genraterandomcolor(num)
{
	var arr = [];

	for(var i=0; i<num; i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}