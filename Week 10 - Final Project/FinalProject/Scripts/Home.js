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
                $(".secondView").show();
                $(".firstView").hide();

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


    $(".createButton, .logInButton, .update, .addElement").mouseenter(function () {

        $(this).css("background-color", "lightyellow");


    });

    $(".createButton, .logInButton, .update, .addElement").mouseleave(function () {


        $(this).css("background-color", "lightblue");

    });



});