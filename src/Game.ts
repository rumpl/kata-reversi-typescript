import {Board} from "./Board";
import {IRule} from "./rules/IRule";
import {CompositeRule} from "./rules/CompositeRule";
import {Position} from "./Position";
import {Cell} from "./Cell";

export class Game {
  private _board:Board;
  private _rules:IRule;

  constructor() {
    this._board = new Board();
    this._rules = new CompositeRule([]);
  }

  possibleMoves(player:Cell):Array<Position> {
    var positions:Array<Position> = [];

    for (var i:number = 0; i < 8; i++) {
      for (var j:number = 0; j < 8; j++) {
        var position = new Position(i, j);
        var canPlay:boolean = this._rules.apply(player, this._board, position);

        if (canPlay) {
          positions.push(position);
        }
      }
    }

    return positions;
  }
}
