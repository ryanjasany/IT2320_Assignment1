// JavaScript source code
window.onload = function Load()
{
    var goodItems = document.getElementsByClassName("goodDescription");
	var badItems = document.getElementsByClassName("badDescription");

    for (var i=0; i < goodItems.length; i++)
    {
        goodItems[i].addEventListener("mouseover", MouseOverListItem);
		goodItems[i].addEventListener("mouseout", MouseOutListItem);
		badItems[i].addEventListener("click", AlterText)
    }

	var inputField = document.getElementsByTagName("input")[0];

	inputField.addEventListener("change", PersonalizePage);

	var invertButton = document.getElementsByClassName("invertButton")[0];

	invertButton.addEventListener("click", InvertColors);
}


function MouseOverListItem(div)
{
	this.className = "green";
}

function MouseOutListItem(div)
{
	this.className = "goodDescription";
}

function PersonalizePage(input){

	var page = document.getElementsByClassName("personal-space")[0];
	page.innerHTML = this.value;

}

function AlterText(div){

	if(this.className == "badDescription")
	{
		this.className = "red";
	}
	else
	{
		this.className = "badDescription";
	}
}

function InvertColors(div){

	if(this.className == "invertButton")
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