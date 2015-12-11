// Write your code here!

$(document).ready(function() {

    $("img").on('click', function() {

        var overlay = $('<div class="overlay"></div>');
        // var image = "<img src='" + $(this).attr('src') + "'/>'";
        // var text = '<img alt=' + $(this).attr('alt') + '/>';

        //overlay.appendTo(document.body);
        // image.appendTo(".overlay"); does NOT work

        // $(".overlay").append(image);
        // $(".overlay").append(text);

        $('body').append(overlay);
        $('.overlay').append("<img src='" + $(this).attr('src') + "'>");
        $('.overlay').append("<p class='legend'>" + $(this).attr('alt') + "</p>");
        $('.overlay').on('click', function() {
            $(this).remove();
        });




        //$(".text").append(image);

    });


});


// $("img").on("click", function(){
//     ('body').append('<div class="overlay"></div>')
//     (".overlay").on('click', function(){
//         (this).remove
//     })
// })


// <img src="http://placekitten.com/g/421/421" ><p>Kitty #1</p>