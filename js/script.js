/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = 0;
        
        if (q1Result === "Training"){
        totalScore= totalScore +5; 
        } else if (q1Result === "Family") {
        totalScore= totalScore + 7;
         } else if (q1Result ==="Studying") {
        totalScore= totalScore + 10;
         }
         if (q2Result === ""){
             totalScore= totalScore+5;
         } else if (q2Result === "") {
             
         }
         }
        if(totalScore < 30)
        $(".result").text("Shoto Todoroki")
    
    });
    
    

});
