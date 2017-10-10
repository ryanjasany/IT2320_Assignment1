function createTeamAsObject()
{
	var team = new Object();
	team.city = "Columbus";
	team.name = "Blue Jackets";

	var johnson = new player("Jack", "Johnson", 7, "Defenseman");

	var savard = new player("David", "Savard", 58, "Defenseman");

	var bobrovsky = new player("Sergei", "Bobrovsky", 72, "Goalie");
	
	var atkinson = new player("Cam", "Atkinson", 13, "Right Wing");


	team.roster = new Array(johnson, savard, bobrovsky, atkinson);

	player.prototype.country = null;
	johnson.country = "USA";
	savard.country = "CAN";
	bobrovsky.country = "RUS";
	atkinson.country = "USA";

	return team;
}

function player(first, last, num, pos){
	this.firstName = first;
    this.lastName = last;
    this.number = num;
    this.position = pos;
	this.name = function() {return this.firstName + " " + this.lastName;};

}

function teamCreator(div){

	var team = createTeamAsObject();

	var target = document.getElementsByClassName("teamButton")[0];

	var table = document.getElementsByClassName("table")[0];

	target.innerHTML = team.city + " " + team.name;
	
	var children = table.childNodes;

	

	for (var i=0, x = 1; i<team.roster.length; i++, x += 2)
	{	

		var player = team.roster[i];
		
		children[x].innerHTML = player.name();
	}
	

}


function displayJSON(div){

var target = document.getElementsByClassName("json-container")[0];

var team = createTeamAsObject();

target.innerHTML = JSON.stringify(team);


}

function DisplayPortrait(div){

	var target = document.getElementsByClassName("portrait")[0];
	var informationTarget = document.getElementsByClassName("information")[0];
	var goalie = document.getElementsByClassName("goalie")[0];
	var defenseman = document.getElementsByClassName("defenseman")[0];
	var forward = document.getElementsByClassName("forward")[0];


	var team = createTeamAsObject();

	if(div.className == "player player-1"){
	
	target.style.backgroundImage = "url(images/jack.jpg)";
	informationTarget.innerHTML = "Name: " + team.roster[0].firstName + " " + team.roster[0].lastName + "<br />" +
	" Number: " + team.roster[0].number + "<br />" + " Position: " + team.roster[0].position + "<br />" + " Country: " + team.roster[0].country;
	defenseman.style.border = "2px solid red";
	forward.style.border = "";
	goalie.style.border = "";

	
	} else if(div.className == "player player-2"){
	
	target.style.backgroundImage = "url(images/david.jpg)";
	informationTarget.innerHTML = "Name: " + team.roster[1].firstName + " " + team.roster[1].lastName + "<br />" +
	" Number: " + team.roster[1].number + "<br />" + " Position: "  + team.roster[1].position + "<br />" + " Country: " + team.roster[1].country;
	defenseman.style.border = "2px solid red";
	forward.style.border = "";
	goalie.style.border = "";

	} else if(div.className == "player player-3"){
	
	goalie.style.border = "2px solid red";
	forward.style.border = "";
	defenseman.style.border = "";
	target.style.backgroundImage = "url(images/sergei.jpg)";
	informationTarget.innerHTML = "Name: " + team.roster[2].firstName + " " + team.roster[2].lastName + "<br />" +
	" Number: " + team.roster[2].number + "<br />" + " Position: "  + team.roster[2].position + "<br />" + " Country: " + team.roster[2].country;

	} else if(div.className == "player player-4"){
	
	forward.style.border = "2px solid red";
	defenseman.style.border = "";
	goalie.style.border = "";
	target.style.backgroundImage = "url(images/cam.jpg)";
	informationTarget.innerHTML = "Name: " + team.roster[3].firstName + " " + team.roster[3].lastName + "<br />" +
	" Number: " + team.roster[3].number + "<br />" + " Position: " + team.roster[3].position + "<br />" + " Country: " + team.roster[3].country;

	}

}
