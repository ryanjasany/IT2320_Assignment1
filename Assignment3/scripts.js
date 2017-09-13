// JavaScript source code

function MouseOverListItem(div)
{
	div.className = "green";
}

function MouseOutListItem(div)
{
	div.className = "goodDescription";
}

function PersonalizePage(input){

	var page = document.getElementsByClassName("personal-space")[0];
	page.innerHTML = input.value;

}

function AlterText(div){

	if(div.className == "badDescription")
	{
		div.className = "red";
	}
	else
	{
		div.className = "badDescription";
	}
}

function InvertColors(div){

	if(div.className == "invertButton")
	{
		var page = document.getElementsByClassName("coffeeQuickGuide")[0];

		page.className = "invertedPage"

		var header = document.getElementsByClassName("header")[0];

		header.className = "invertedHeader"

		var revert = document.getElementsByClassName("invertButton")[0];

		revert.className = "revertButton";
	}
	else
	{
		var page = document.getElementsByClassName("invertedPage")[0];

		page.className = "coffeeQuickGuide"

		var header = document.getElementsByClassName("invertedHeader")[0];

		header.className = "header"

		var revert = document.getElementsByClassName("revertButton")[0];

		revert.className = "invertButton";
	
	
	
	
	}



}