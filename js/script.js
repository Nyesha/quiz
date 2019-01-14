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
         if (q2Result === "Fiery"){
             totalScore= totalScore+5;
         } else if (q2Result === "Nonchalant") {
             totalScore= totalScore +7;
             } else if (q2Result === "Helpful") {
                 totalScore = totalScore === +10;
             }
             if (q3Result === "Coffee"){
                 totalScore=totalScore+5;
             } else if (q3Result ==="Tea"){
                 totalScore = totalScore +7 
                 } else if (q3Result === "Water"){
                     totalScore = totalScore +10;
                 }
        if(totalScore < 30)
        $(".result").text("Shoto Todoroki")
         if(totalScore > 10 )
         $(".result").text("Eijiro Kirishima")
         if(totalScore === 21)
         $(".result").text("Shoto Todoroki")
         if(totalScore === 15)
         $(".result").text("Izuku Midoriya")
         if(totalScore ===0)
         $(".result").text("Play The Game To Get A Character")
         
    
    });
    
    

});
