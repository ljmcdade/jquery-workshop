// // Write your code here!
$(document).ready(function() {

    var $close = $("<button class='closeButton'>X</button>");

    $(".announcement").prepend($close);

    $('.closeButton').on("click", function() {
        
        $(this).parent().find("p").toggle("slow");

        if ($(this).text() === "X"){

        $(this).text("show announcement");
        }
        else {
            $(this).text("X");
        }
    });
});

