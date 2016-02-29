import {Position} from './Position';
import {Cell} from './Cell';

export class Board {
  private cells:Array<Cell>;

  constructor() {
    this._initCells();
  }

  getCellAt(position: Position):Cell {
    return this.cells[position.x + position.y * 8];
  }

  setCellAt(position: Position, cell:Cell):void {
    this.cells[position.x + position.y * 8] = cell;
  }

  private _initCells():void {
    this.cells = [];

    for (var i:number = 0; i < 8; i++) {
      for (var j:number = 0; j < 8; j++) {
        if (i === 3 && j === 3) {
          this.cells.push(Cell.BLACK);
        }
        else if (i === 3 && j === 4) {
          this.cells.push(Cell.WHITE);
        }
        else if (i === 4 && j === 3) {
          this.cells.push(Cell.WHITE);
        }
        else if (i === 4 && j === 4) {
          this.cells.push(Cell.BLACK);
        }
        else {
          this.cells.push(Cell.EMPTY);
        }
      }
    }
  }
}
