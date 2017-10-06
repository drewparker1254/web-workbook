

$(document).ready (function(){
  var sq1 = $('#square1');
  var sq2 = $('#square2');
  var sq3 = $('#square3');
  var sq4 = $('#square4');
  var sq5 = $('#square5');
  var sq6 = $('#square6');
  var sq7 = $('#square7');
  var sq8 = $('#square8');
  var sq9 = $('#square9');
});

var playValid = false;
var win = false;

function validatePlay(squareplayed) {
    if ($(squareplayed)).hasClass('free')){
      playValid = true;
    }
    else{
      playValid = false;
      return false;
    }
}

function checkDraw(){
  if (!($('.tile').hasClass('free'))) {
    alert("Draw!");
  }
}

function checkWin() {
  if( sq1.hasClass('xplayed') && sq2.hasClass('xplayed') && sq3.hasClass('xplayed'))
  winAlert("X")
}
  else if ( sq1.hasClass('oplayed') && sq2.hasClass('oplayed') && sq3.hasClass('oplayed'))
  winAlert("O")
$(".tile").on("click",function Xplay(
  validatePlay(this);

  if(playValid){
    $(this).removeClass('free');
    $(this).addClass(played);
    $(this).addClass(xplayed);
    $(this).html("X");
  }
  else {
    alert("This square has already been played. Choose again.");
  }


));
