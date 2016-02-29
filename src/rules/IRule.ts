import {Position} from "./../Position";
import {Cell} from "./../Cell";
import {Board} from "../Board";

export interface IRule {
  apply(player:Cell, board:Board, position:Position):boolean;
}
