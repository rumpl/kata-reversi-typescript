
enum Color {
  Empty, Black, White
}


type Vector = [number, number];

const directions : Vector[] = [ [1,0], [0,1], [-1,0], [0,-1], [1,1], [-1, -1], [1, -1], [-1, 1] ];

class Reversi {

  constructor(private board : Color[][], private currentPlayer : Color) {

  }

  possiblePositions() : Vector[] {
    let result : Vector[] = [];
    this.board.forEach((row, x) => {
      row.forEach((status, y) => {
        if (this.isPossiblePosition(x, y)) {
          result.push([x, y])
        }
      });
    });
    return result;
  }

  opponentColor() : Color {
    if (this.currentPlayer === Color.Black) {
      return Color.White;
    }
    return Color.Black;
  }



  isPossiblePosition(x: number, y: number) : boolean {
    if (this.board[x][y] !== Color.Empty) {
      return false;
    }

    return directions.some(direction => {
      let opponentFound = false;
      let cursor = this.movePosition([x,y], direction);
      while(this.opponentCell(cursor)) {
        cursor = this.movePosition(cursor, direction);
        opponentFound = true;
      }
      return opponentFound && this.currentPlayerCell(cursor)
    });
  }

  movePosition([x,y] : Vector, [a, b] : Vector) : Vector {
    return [x+a, y+b];
  }

  opponentCell([x,y] : Vector) : boolean {
    return this.inBoard([x,y]) && this.board[x][y] === this.opponentColor();
  }

  currentPlayerCell([x,y] : Vector) : boolean {
    return this.inBoard([x,y]) && this.board[x][y] === this.currentPlayer;
  }

  inBoard([x,y] : Vector) : boolean {
    return !(x < 0 || y < 0 || x > 7 || y > 7);
  }

}

export {
  Color,
  Vector,
  Reversi
}
