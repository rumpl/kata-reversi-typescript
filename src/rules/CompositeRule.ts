import {IRule} from "./IRule";
import {Position} from '../Position';
import {Cell} from '../Cell';
import {Board} from "../Board";

export class CompositeRule implements IRule {
  private _rules:Array<IRule>;

  constructor(rules:Array<IRule>) {
    this._rules = rules;
  }

  apply(player:Cell, board:Board, position:Position):boolean {
    var finalResult = true;

    this._rules.forEach((rule:IRule) => {
      var ruleResult = rule.apply(player, board, position);
      if (!ruleResult) {
        finalResult = false;
      }
    });

    return finalResult;
  }
}
