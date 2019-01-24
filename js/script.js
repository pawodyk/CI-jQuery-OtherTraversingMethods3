$(document).ready(function () {
    // put your code here
    $(".theButton").click(function() {
        var color = $(this).css("background-color");
        $(".superButton").text(color);
    });

    $(".superButton").click(function() {
        $(this).text("Reset");
    });
});