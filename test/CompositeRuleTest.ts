import { expect } from 'chai';
import {IRule} from '../src/rules/IRule';
import {Cell} from '../src/Cell';
import {Position} from '../src/Position';
import {CompositeRule} from '../src/rules/CompositeRule';
import {Board} from '../src/Board';

describe('Composite rule', ():void => {
  var position:Position;
  var compositeRule:IRule;
  var board:Board;

  class YesRule implements IRule {
    apply(player:Cell, board:Board):boolean {
      return true;
    }
  }

  class NoRule implements IRule {
    apply(player:Cell, board:Board):boolean {
      return false;
    }
  }

  beforeEach(() => {
    board = new Board();
    position = new Position(0, 0);
  });

  it('should return true if no rules are defined', ():void => {
    compositeRule = new CompositeRule([]);
    expect(compositeRule.apply(Cell.BLACK, board, position)).to.be.equal(true);
  });

  it('should return true if all rules return true', ():void => {
    compositeRule = new CompositeRule([new YesRule(), new YesRule()]);
    expect(compositeRule.apply(Cell.BLACK, board, position)).to.be.equal(true);
  });

  it('should return false if one rule returns false', ():void => {
    compositeRule = new CompositeRule([new NoRule(), new YesRule()]);
    expect(compositeRule.apply(Cell.BLACK, board, position)).to.be.equal(false);
  });
});
