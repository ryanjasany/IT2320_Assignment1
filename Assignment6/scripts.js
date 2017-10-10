var Main = {}


    Main.hockeyTeam = function(teamName, teamCity, teamDivision){


        this.name = teamName;
        this.city = teamCity;
        this.division = teamDivision;
        this.roster = [];

    };


    Main.hockeyTeam.prototype.listRoster = function () {


        var rosterListed = "";

        for (var x = 0; x < this.roster.length; x++) {

            rosterListed += "<li>"
            rosterListed = rosterListed + this.roster[x].name + " ";
            rosterListed += "</li>"
        }

        return rosterListed;

    }

    Main.Player = function(playerName, playerPosition, playerCountry, playerNumber){

        this.name = playerName;
        this.position = playerPosition;
        this.country = playerCountry;
        this.number = playerNumber;
    }

    



$(document).ready(function () {

    Main.BlueJackets = new Main.hockeyTeam("Blue Jackets", "Columbus", "Metropolitan");

    alert(Main.BlueJackets.name);

    Main.BlueJackets.roster[0] = new Main.Player("Jack Johnson", "Defensemen", "USA", "7");
    Main.BlueJackets.roster[1] = new Main.Player("Cam Atkinson", "Forward", "USA", "13");
    Main.BlueJackets.roster[2] = new Main.Player("Sergei Bobrovsky", "Goalie", "RUS", "72");
    Main.BlueJackets.roster[3] = new Main.Player("David Savard", "Defensemen", "CAN", "58");

    $(".container").html(Main.BlueJackets.listRoster());

});