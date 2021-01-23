
var gameState = false;
var gamePattern = [];
var userPattern = [];
var currentLv = 1;






function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  console.log(randomNumber);
  gamePattern.push(randomNumber);
  setTimeout(function(){
    switch(randomNumber){
      case 0:
        click("q");
        break;
      case 1:
        click("w");
        break;
      case 2:
        click("a");
        break;
      case 3:
        click("s");
        break;

    }
  },200);
}

$(document).on("keydown",function(v){
    if(gameState ===false) {
      $("h1").text("Level " + currentLv);
      gameState = true;
      nextSequence();
    }
    else {
      if(v.key ==="q") {
        console.log("q");
        userPattern.push(0);
        click(v.key);
      }
      else if(v.key==="w") {
        console.log("w");
        userPattern.push(1);
        click(v.key);

      }
      else if(v.key==="a") {
        console.log("a");
        userPattern.push(2);
        click(v.key);

      }
      else if(v.key==="s") {
        console.log("s");
        userPattern.push(3);
        click(v.key);

      }
      playCheck();
    }

});

$(".btn").on("click",function(evt){
  clickedButton=evt.currentTarget.id;

  if(gameState ===true){
    switch(clickedButton){
      case "green":
        console.log("q");
        userPattern.push(0);
        click("q");
        playCheck();
        break;
      case "red":
        console.log("w");
        userPattern.push(1);
        click("w");
        playCheck();
        break;
      case "yellow":
        console.log("a");
        userPattern.push(2);
        click("a");
        playCheck();
        break;
      case "blue":
        console.log("s");
        userPattern.push(3);
        click("s");
        playCheck();
        break;
      default:
        break;
    }
  }
  else if(gameState ===false) {
    $("h1").text("Level " + currentLv);
    gameState = true;
    nextSequence();
  }

});

function click(key){

  switch(key){
    case "q":
      var sndGreen= new Audio();
      sndGreen.src = "sounds/green.mp3";
      sndGreen.play();
      $("#green").addClass("pressed");
      setTimeout(function(){
        $("#green").removeClass("pressed");
      },100);
      break;
    case "w":
      var sndRed= new Audio();
      sndRed.src = "sounds/red.mp3";
      sndRed.play();
      $("#red").addClass("pressed");
      setTimeout(function(){
        $("#red").removeClass("pressed");
      },100);
      break;
    case "a":
      var sndYellow= new Audio();
      sndYellow.src = "sounds/yellow.mp3";
      sndYellow.play();
      $("#yellow").addClass("pressed");
      setTimeout(function(){
        $("#yellow").removeClass("pressed");
      },100);
      break;
    case "s":
      var sndBlue= new Audio();
      sndBlue.src = "sounds/blue.mp3";
      sndBlue.play();
      $("#blue").addClass("pressed");
      setTimeout(function(){
        $("#blue").removeClass("pressed");
      },100);
      break;
    default:
      break;

  }

}







function playCheck(){
  var length = gamePattern.length;
  var inputLength = userPattern.length;
  var gameOver = false;
  if(length>=inputLength){
      for(i=0;i<inputLength;i++) {
        if(gamePattern[i] != userPattern[i])
          gameOver = true;

      }
      //game over check
      if(gameOver===true) {
        gameState= false;
        $("#level-title").text("Game Over, Press Any Key to Restart");
        userPattern=[];
        gamePattern=[];
        currentLv = 1;
        var sndWrong = new Audio();
        sndWrong.src = "sounds/wrong.mp3";
        sndWrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");
        },300);

        return;
      }


  }
  if(length===inputLength && gameOver ===false){
    userPattern=[];
    setTimeout(function(){
      nextSequence();
      currentLv++;
      $("#level-title").text("Level "+currentLv);
    },1000);

    return;
  }


}
