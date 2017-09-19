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

	var target = document.getElementsByClassName("container")[0];


	target.innerHTML = team.city + " " + team.name;
	
	for (var i=0; i<team.roster.length; i++)
	{
		var player = team.roster[i];
		alert("#" + player.number + " " + player.firstName + " " + player.lastName + " " + player.position + ".");
	}
	

}