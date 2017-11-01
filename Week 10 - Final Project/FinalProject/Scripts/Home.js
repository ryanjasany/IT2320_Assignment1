var Home = {};

Home.createAccount = function() {

    var username;
    var password;
    var email;
    var repeatEmail;

    alert("Contacting Server");

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
            alert(response.Message);
        }

    });

}


$(document).ready(function () {

    $(".createButton").click(function()
    {
        Home.createAccount()
    });

});