import {IRule} from "./IRule";
import {Cell} from "../Cell";
import {Board} from "../Board";
import {Position} from "../Position";

export class VerticalRule implements IRule {
  apply(player:Cell, board:Board, position: Position):boolean {
    return undefined;
  }
}
