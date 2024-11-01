var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var usedClickedPattern=[];
var started = false;
var level=0;

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

$(document).keydown(function(){
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started=true;
    }
});

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    },100);
}
function nextSequence(){
    usedClickedPattern=[];
    level++;
    $("h1").text("Level " + level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    usedClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(usedClickedPattern.length-1);
});



function checkAnswer(currentLevel){
    if (usedClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if (usedClickedPattern.length===gamePattern.length) {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    } else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}

function startOver(){
    gamePattern=[];
    started=false;
    level=0;
}