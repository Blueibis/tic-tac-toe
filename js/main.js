document.addEventListener('DOMContentLoaded', function() {


var game = document.querySelector('.board')
var intro = document.querySelector('.intro')

window.addEventListener('keyup', function(e) {
  switch (e.which) {
    case 89:
      game.style.display = 'block';
      intro.style.display = 'none';
      break;
    case 78:
      intro.style.display = 'block';
      game.style.display = 'none';
      intro.innerHTML = '<p>That\'s unfortunate. Perhaps another time then.</p>'
      break;
    case 27:
      intro.style.display = 'block';
      game.style.display = 'none';
      intro.innerHTML = '<p class="greeting">Hello Jennie,</p><p class="introtext">would you like to play a game of Tic-Tac-Toe?</p><p class="yesno">(Y)<span class="no">(N)</span></p>'
      break;
    default:
  }
})

});
