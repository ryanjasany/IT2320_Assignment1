$(document).ready(function () {

	var entry;
	var textbox;

	$(".player-number-button").click(function () {

		alert("Contacting Server");
		entry = $(".player-number-textbox-input").val();
		textbox = $(".output");

		$.ajax({
			url: "Home/GetPlayerInformation",
			data: { PlayerNumber: entry },
			success: function (stringResponse) {
				response = JSON.parse(stringResponse);
				textbox.append("Name: " + response.PlayerName + "<br>Number: " + response.PlayerNumber + "<br>");
				textbox.css("border", "1px solid green");
			}

		});

	});


});