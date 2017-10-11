var Main = {}

  //Create object for team
    Main.hockeyTeam = function(teamName, teamCity, teamDivision){


        this.name = teamName;
        this.city = teamCity;
        this.division = teamDivision;
        this.roster = [];

    };

 //Create a list of all player's names
    Main.hockeyTeam.prototype.listRoster = function () {


        var rosterListed = "";

        for (var x = 0; x < this.roster.length; x++) {

            rosterListed += "<li class='player'>"
            rosterListed = rosterListed + this.roster[x].name + " ";
            rosterListed += "</li>"
        }

        return rosterListed;

    }

  //Constructor for a player
    Main.Player = function(playerName, playerPosition, playerCountry, playerNumber){

        this.name = playerName;
        this.position = playerPosition;
        this.country = playerCountry;
        this.number = playerNumber;
    }

  //Display player info and portrait to page
    Main.hockeyTeam.prototype.Display = function(text){

        var targetPlayer;

        for (var x = 0; x < this.roster.length; x++) {

            if (this.roster[x].name === text.trim()){

                targetPlayer = this.roster[x];
                var informationText = "";

                for (variable in targetPlayer) {

                    informationText += "<li class='infoBullet'>"
                    informationText += variable + ": " + targetPlayer[variable];
                    informationText += " </li>"

                }

                var imageLocation = "url(images/" + targetPlayer["number"] + ".jpg)";

                $(".information").html(informationText);
                $(".portrait").css("background-image", imageLocation);


            }
        }

    }
    



$(document).ready(function () {

    //Create the team object
    Main.BlueJackets = new Main.hockeyTeam("Blue Jackets", "Columbus", "Metropolitan");

    //Add players to the team object
    Main.BlueJackets.roster[0] = new Main.Player("Jack Johnson", "Defensemen", "USA", "7");
    Main.BlueJackets.roster[1] = new Main.Player("Cam Atkinson", "Forward", "USA", "13");
    Main.BlueJackets.roster[2] = new Main.Player("Sergei Bobrovsky", "Goalie", "RUS", "72");
    Main.BlueJackets.roster[3] = new Main.Player("David Savard", "Defensemen", "CAN", "58");

    //Display players' names as a list
    $(".container").html(Main.BlueJackets.listRoster());

    //Attach event listeners to players
    $(".player").click(function () {

        Main.BlueJackets.Display($(this).text());

    });
});