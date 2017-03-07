function Board() {
  this.row0 = '123';
  this.row1 = '456';
  this.row2 = '789';
  this.line = '---';

  this.printLines = function() {
    console.log(this.row0.split('').join('|'));
    console.log(this.line.split('').join('|'));
    console.log(this.row1.split('').join('|'));
    console.log(this.line.split('').join('|'));
    console.log(this.row2.split('').join('|'));
  };
}

function Game() {
  Board.call(this);
  this.winner = null;
  this.Oturn = true;
  this.turn = this.Oturn ? 'o' : 'x';
  this.printLines();
}

Game.prototype.prompt = function(cb) {
  console.log(`It is ${this.turn}'s turn. Please place your ${this.turn}.`);
};

Game.prototype.placePiece = function(num) {
  var numStr = num.toString();
  if (this.row0.includes(numStr)) {
    this.row0 = this.row0.replace(numStr, this.turn);
    this.Oturn = !this.Oturn;
    this.turn = this.Oturn ? 'o' : 'x';
    this.printLines.call(this);
    this.checkWinner();
  } else if (this.row1.includes(numStr)) {
    this.row1 = this.row1.replace(numStr, this.turn);
    this.Oturn = !this.Oturn;
    this.turn = this.Oturn ? 'o' : 'x';
    this.printLines.call(this);
    this.checkWinner();
  } else if (this.row2.includes(numStr)) {
    this.row2 = this.row2.replace(numStr, this.turn);
    this.Oturn = !this.Oturn;
    this.turn = this.Oturn ? 'o' : 'x';
    this.printLines.call(this);
    this.checkWinner();
  } else {
    console.log(`Invalid input. Please call game.placePiece(#) on an open number on the board.`);
  }
};

Game.prototype.checkWinner = function() {
  var column = this.row0[0] + this.row1[0] + this.row2[0];
  var majDiag = this.row0[0] + this.row1[1] + this.row2[2];
  var minDiag = this.row0[2] + this.row1[1] + this.row2[0];
  if (this.row0 === 'ooo' || column === 'ooo' || majDiag === 'ooo' || minDiag === 'ooo') {
    this.winner = 'o';
    console.log('O WINS!');
  } else if (this.row0 === 'xxx' || column === 'xxx' || majDiag === 'xxx' || minDiag === 'xxx') {
    this.winner = 'x';
    console.log('X WINS!');
  }
};
var game = new Game();
