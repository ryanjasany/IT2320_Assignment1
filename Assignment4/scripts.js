// JavaScript source code
function createTeamAsObject()
{
	var team = new Object();
	team.city = "Columbus";
	team.name = "Blue Jackets";

	var johnson = new Object();
	johnson.firstName = "Jack" 
	johnson.lastName = "Johnson";
	johnson.number = 7;
	johnson.position = "Defenseman"

	var savard = new Object();
	savard.firstName = "David";
	savard.lastName = "Savard";
	savard.number = 58;
	savard.position = "Defenseman";

	var bobrovsky = new Object();
	bobrovsky.firstName = "Sergei";
	bobrovsky.lastName = "Bobrovsky";
	bobrovsky.number = 72;
	bobrovsky.position = "Goalie";

	var atkinson = new Object();
	atkinson.firstName = "Cam";
	atkinson.lastName = "Atkinson";
	atkinson.number = 13;
	atkinson.position = "Right Wing";

	team.roster = new Array(johnson, savard, bobrovsky, atkinson);

	return team;
}

function alertMe(div){

	var team = createTeamAsObject();

	var target = document.getElementsByClassName("teamButton")[0];

	var table = document.getElementsByClassName("table")[0];

	target.innerHTML = team.city + " " + team.name;
	
	var children = table.childNodes;

	

	for (var i=0, x = 1; i<team.roster.length; i++, x += 2)
	{	

		var player = team.roster[i];

		children[x].innerHTML = "#" + player.number + " " + player.firstName + " " + player.lastName + " " + player.position + ".";
	}
	

}


function displayJSON(div){

var target = document.getElementsByClassName("json-container")[0];

var team = createTeamAsObject();

target.innerHTML = JSON.stringify(team);


}