var Main = {}


	Main.calendar = {
	
		"Year":2017,
		"months":[
			{
				"name":"January",
				"holidays":["New Year's Day","National Bird Day","Opposite Day","Chinese New Years"],
				"numberOfDays":31
				
				
			},
			{
				"name":"February",
				"holidays":["Groundhog's Day","Super Bowl Sunday","Valentine's Day","Mardi Gras"],
				"numberOfDays":28
			},
			{
				"name":"March",
				"holidays":["International Women's Day","Ides of March","St. Patrick's Day","Spring Equinox"],
				"numberOfDays":31
			},
			{
				"name":"April",
				"holidays":["April Fool's Day","Earth Day","Arbor Day","Easter Sunday"],
				"numberOfDays":30
				
			},
			{
				"name":"May",
				holidays:["May Day","Star Wars Day","Cinco de Mayo","Mother's Day"],
				"numberOfDays":31
				}
		]		
			
    }
    

	Main.produceButtons = function(){
	
		for(var x = 0; x < Main.calendar.months.length; x++)
		{
			$(".display").append("<li class='month'>" + Main.calendar.months[x].name + "</li>")
		}
	
	}

	Main.produceSummary = function(name){
	
		var htmlAndText = "";

		for(var x = 0; x < Main.calendar.months.length; x++)
		{
			if(Main.calendar.months[x].name == name)
			{
				htmlAndText += "Name: " + Main.calendar.months[x].name + "<br>";
				htmlAndText += "Number of Days: " + Main.calendar.months[x].numberOfDays + "<br>";
				htmlAndText += "Holidays: " + Main.calendar.months[x].holidays.length + "<br>";

				for(var y = 0; y < Main.calendar.months[x].holidays.length; y++)
				{
					htmlAndText += "<li>" + Main.calendar.months[x].holidays[y] + "</li>"
				
				}

				return htmlAndText;

			}
		}

	}


$(document).ready(function () {
    
	Main.produceButtons();

	$(".month").click(function(){

		$(".details").html(Main.produceSummary($(this).text()));

	});


});