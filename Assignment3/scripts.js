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