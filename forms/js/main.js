// alert ("I AM WORKING");
// console.log("I AM WORKING");

// this is how we set a variable
// var x = 12;
// var fName = "Megan";

// console.log(1+x);
// console.log(fName);

// mixture of variable and string (a string is text that doesn't mean anything... the thing in quotes)
// console.log("Hello my name is, " + fName);

// first word lowercase and every word after that starts with a capital
// $("#main-box").addClass("animated infinite rollOut");

// this tells the function when to happen
// $( document ).ready(function() {
//     // Handler for .ready() called.
//     $("#btn-rollOut").addEventListener;
//   });

  $( document ).ready(function() {
    // Handler for .ready() called.
    $("#btn-rollOut").on("click", function() {
        // console.log( $(this).text() );
        $("#main-box").addClass("animated infinite rollOut");
    });
    $("#btn-stopRollOut").on("click", function() {
        // console.log( $(this).text() );
        $("#main-box").removeClass("animated infinite rollOut");
  });
});


//   homework: 3 boxes doing 3 different animations with start and stop buttons