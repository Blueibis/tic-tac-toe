document.addEventListener('DOMContentLoaded', function() {


var game = document.querySelector('.board')
var intro = document.querySelector('.intro')
var fields = document.querySelectorAll('.ttt')
var outro = document.querySelector('.outro')
var back = document.querySelector('.esc')
var turn = '<span>X</span>'
var moves = 0
var checkArray = []
var xWin = 0
var yWin = 0

function nextTurn(field) {
  turn = turn === '<span>X</span>' ? '<span>O</span>' : '<span>X</span>';
}
function clickOff(field) {
  field.removeEventListener('click', myMove);
}
function gameWin() {
  moves = 0;
  xWin++;
  back.innerHTML = '<p class="esc">esc to back<span class="stat">X:</span><span class="statnum">' + xWin + '</span><span class="stat">Y:</span><span class="statnum">' + yWin + '</span></p>'
  outro.innerHTML = '<p class="end">You Won!!!</p>'
  outro.style.display = 'block';
  fields.forEach(clickOff);
}
function gameLose() {
  moves = 0;
  yWin++;
  back.innerHTML = '<p class="esc">esc to back<span class="stat">X:</span><span class="statnum">' + xWin + '</span><span class="stat">Y:</span><span class="statnum">' + yWin + '</span></p>'
  outro.innerHTML = '<p class="end">Crushing defeat...</p>'
  outro.style.display = 'block';
  fields.forEach(clickOff);
}
function gameDraw() {
  moves = 0;
  outro.innerHTML = '<p class="end">It\'s a draw...</p>'
  outro.style.display = 'block';
  fields.forEach(clickOff);
}
function myMove(eventObject) {
  this.innerHTML = turn
  moves++;
  nextTurn();
}
function addClick(field) {
  field.addEventListener('click', myMove)
}

fields.forEach(addClick);

window.addEventListener('keyup', function(e) {
  switch (e.which) {
    case 89: //y
      if (game.style.display === 'none') {
        fields.forEach(clickOff);
        fields.forEach(addClick);
        turn = '<span>X</span>';
      }
        game.style.display = 'block';
        back.style.display = 'block';
        back.innerHTML = '<p class="esc">esc to back<span class="stat">X:</span><span class="statnum">' + xWin + '</span><span class="stat">Y:</span><span class="statnum">' + yWin + '</span></p>'
        intro.style.display = 'none';
        break;
    case 78: //n
      intro.style.display = 'block';
      game.style.display = 'none';
      back.style.display = 'none';
      outro.style.display = 'none';
      intro.innerHTML = '<p class="introtext">That\'s unfortunate. Perhaps another time then.</p>'
      break;
    case 27: //esc
      for (var index = 0; index < fields.length; index++) {
        fields[index].innerHTML = null;
      }
      intro.style.display = 'block';
      game.style.display = 'none';
      outro.style.display = 'none';
      back.style.display = 'none';
      intro.innerHTML = '<p class="greeting">Hello Jennie,</p><p class="introtext">would you like to play a game of Tic-Tac-Toe?</p><p class="yesno">(Y)<span class="no">(N)</span></p>'
      break;
    default:
  }
})

game.addEventListener('click', function(e) {
  var target = e.target;
  var targetClass = target.className;
  target.removeEventListener('click', myMove);
  checkEnd(targetClass);

  function getCheck(field) {
    checkArray.push(field.innerText);
  }

  function checkEnd(targetClassName) {
    var targetClassWord = targetClassName.split(" ");
    for (var index = 1; index < targetClassWord.length; index++) {
      var check = document.querySelectorAll('.' + targetClassWord[index]);
      check.forEach(getCheck);
      if (checkArray.every(function(letter) {return letter === 'X'})) {
        setTimeout(gameWin, 300);
        break;
      } else if (checkArray.every(function(letter) {return letter === 'O'})) {
        setTimeout(gameLose, 300);
        break;
      } else if (index === targetClassWord.length - 1 && moves === 9) {
        setTimeout(gameDraw, 300);
        break;
      } else {
      }
      checkArray = [];
    }
  }
})

});
