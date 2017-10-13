var Main = {}


	Main.calendar = {
	
		"Year":2017,
		"months":[
			{
				"January":{
					holidays:["New Year's Day","National Bird Day","Opposite Day","Chinese New Years"]
				}
			},
			{
				"February":{
				holidays:["Groundhog's Day","Super Bowl Sunday","Valentine's Day","Mardi Gras"]
				}
			},
			{
				"March":{
				holidays:["","","",""]
				}
			},
			{
				"April":{
				holidays:["","","",""]
				}
			},
			{
				"May":{
				holidays:["","","",""]
				}
				}
		]		
			
  
    }
    



$(document).ready(function () {


	$(".display").text(Main.calendar.Year);
    



});