console.log("Everything is up and ready!")
var validChar = ["0","1","2","3","4","5","6","7","8","9","/"];



$(document).ready(function() {
    var input = $("#input");
    var results = $("#results");
    console.log("jQuery Loaded");
    $("#submit").click( function () {
        console.log("Submit Requested")
        inputValue = input.val();
        // inputValue equals "string" submitted
        var currentChar;
        for (currentChar = 1; currentChar < (inputValue.length+1); currentChar++) {
            // Runs 5 times, with values of step 0 through 4.
            console.log(inputValue.charAt(currentChar-1));
        }
    results.html(inputValue);
    });
    $('.date').mask('00/00/0000');
});


