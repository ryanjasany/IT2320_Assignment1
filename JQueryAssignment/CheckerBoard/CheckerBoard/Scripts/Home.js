$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    var active = "";
    var activeClass = "";

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");


    }

    //Make a piece active
    $(".piece").click(function () {

        if (active === "") {
            active = $(this);
            active.addClass("active");
            activeClass = this.className;
        }

    });

    $(".cell").click(function () {

        var target = $(this);

        if (this.className === "cell" && active != "")
        {
            $(this).attr("class", activeClass);

            //Remove piece from initial space
            active.removeClass("red");
            active.removeClass("black");
            active.removeClass("active");
            active.removeClass("piece");
            active.off("click");

                //-----------Fix Bug Where starting rows are inaccessible : start -->>  //

                active.click(function () {

                    var target = $(this);

                    if (this.className === "cell" && active != "") {

                        $(this).attr("class", activeClass);

                         //Remove piece from initial space
                        active.removeClass("red");
                        active.removeClass("black");
                        active.removeClass("active");
                        active.removeClass("piece");

                         //Remove class from target space
                        target.removeClass("active");
                        target.click(function () {
                            if (active === "") {
                                active = $(this);
                                active.addClass("active");
                                activeClass = this.className;
                            }
                        });

                     //Reset Active status
                    active = "";
                    activeClass = "";

                    }
                });



                //-----------Fix Bug: Where starting rows are inaccessible : Stop -->> //

            //Remove class from target space
            target.removeClass("active");
            target.click(function () {
                if (active === "") {
                    active = $(this);
                    active.addClass("active");
                    activeClass = this.className;
                }
            });

            //Reset Active status
            active = "";
            activeClass = "";

        }
    });


});
