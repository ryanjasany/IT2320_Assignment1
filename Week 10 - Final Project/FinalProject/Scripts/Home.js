var Home = {};

Home.createAccount = function() {

    var username;
    var password;
    var email;
    var repeatEmail;

    var username = $(".create.username").val();
    var password = $(".create.password").val();
    var email = $(".create.email").val();
    var repeatEmail = $(".create.repeatEmail").val();


    $.ajax({
        url: "Home/CreateAccount",
        data: {
            "Username": username,
            "Password": password,
            "EmailAdd": email,
            "EmailCon": repeatEmail
        },
        success: function (stringResponse) {
            response = JSON.parse(stringResponse);
            if (response.Message === "Error")
            {
                $(".error.create").css("display", "block");
            } else if (response.Message === "Success") {
                $(".container").css("border", "1px solid green");
            }
        }

    });

}


Home.logIn = function () {

    var username;
    var password;

    var username = $(".logIn.username").val();
    var password = $(".logIn.password").val();


    $.ajax({
        url: "Home/Login",
        data: {
            "Username": username,
            "Password": password
        },
        success: function (stringResponse) {
            response = JSON.parse(stringResponse);
            if (response.Message === "Error") {
                $(".error.logIn").css("display", "block");
            }
            else if (response.Message === "Success") {
                $(".container").css("border", "1px solid green");
                Home.getInformation();
                $(".firstView").animate({
                    right: '1000px'
                }, "slow", function () { $(".firstView").hide(); $(".secondView").show().animate({ left: '10px' }); });

            }
        }

    });

}

Home.addOrUpdateElement = function () {

    var username;
    var elementName;
    var elementValue;

    username = $(".displayName").text();
    elementName = $(".element.elementName").val();
    elementValue = $(".element.elementValue").val();


    $.ajax({
        url: "Home/AddOrUpdateElement",
        data: {
            "Username": username,
            "elementName": elementName,
            "elementValue": elementValue
        },
        success: function (stringResponse) {
            response = JSON.parse(stringResponse);
            if (response.Message === "Error") {
                alert("error");
            }
            else if (response.Message === "Success") {
                $(".container").css("border", "1px solid green");
                $(".additionalInfo").append("<li>Name: " + elementName + "        Value: " + elementValue + "</li>");

            }
        }

    });

}

Home.updateEmail = function () {

    var username;
    var elementName;
    var elementValue;

    username = $(".displayName").text();
    elementName = "emailadd";
    elementValue = $("input.account.email").val();


    $.ajax({
        url: "Home/AddOrUpdateElement",
        data: {
            "Username": username,
            "elementName": elementName,
            "elementValue": elementValue
        },
        success: function (stringResponse) {
            response = JSON.parse(stringResponse);
            if (response.Message === "Error") {
                alert("error");
            }
            else if (response.Message === "Success") {
                $(".container").css("border", "1px solid green");

            }
        }

    });

}

Home.updateGPA = function () {

    var username;
    var elementName;
    var elementValue;

    username = $(".displayName").text();
    elementName = "gpa";
    elementValue = $("input.account.gpa").val();


    $.ajax({
        url: "Home/AddOrUpdateElement",
        data: {
            "Username": username,
            "elementName": elementName,
            "elementValue": elementValue
        },
        success: function (stringResponse) {
            response = JSON.parse(stringResponse);
            if (response.Message === "Error") {
                alert("error");
            }
            else if (response.Message === "Success") {
                $(".container").css("border", "1px solid green");

            }
        }

    });

}

Home.getInformation = function () {

    var username;
    var username = $(".logIn.username").val();


    $.ajax({
        url: "Home/GetAccountInformation",
        data: {
            "Username": username,
        },
        success: function (stringResponse) {
            response = JSON.parse(stringResponse);
            if (response.Message === "Error") {
                $(".error.logIn").css("display", "block");
            }
            else if (response.Message === "Success") {
                $(".container").css("border", "1px solid green");

                response2 = JSON.parse(response.Payload);

                $(".displayName").text(response2.account.username);
                $(".account.email").val(response2.account.emailadd);
                $(".account.gpa").val(response2.account.gpa);

                for (x in response2.account)
                {
                    if (!(x === "username" || x === "password" || x === "emailadd" || x === "gpa")) {
                        $(".additionalInfo").append("<li>Name: " + x + "        Value: "+  response2.account[x] + "</li>");
                    }
                    }

            }


        }

    });

}


$(document).ready(function () {

    $(".createButton").click(function()
    {
        Home.createAccount()
    });

    $(".logInButton").click(function () {
        Home.logIn()
    });

    $(".button.update.email").click(function () { Home.updateEmail() });

    $("button.addElement").click(function () {
        Home.addOrUpdateElement()
    });

    $("button.update.gpa").click(function () {
        Home.updateGPA()
    });

    $(".createButton, .logInButton, .update, .addElement").mouseenter(function () {

        $(this).css("background-color", "lightyellow");


    });

    $(".createButton, .logInButton, .update, .addElement").mouseleave(function () {


        $(this).css("background-color", "lightblue");

    });



});