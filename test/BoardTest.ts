import {Board} from '../src/Board';
import {Cell} from '../src/Cell';
import { expect } from 'chai';
import {Position} from '../src/Position';

describe('Board', () => {
  var board:Board;

  beforeEach(():void => {
    board = new Board();
  });

  it('should start with starting position', ():void => {
    expect(board.getCellAt(new Position(3, 3))).to.be.equal(Cell.BLACK);
    expect(board.getCellAt(new Position(3, 4))).to.be.equal(Cell.WHITE);

    expect(board.getCellAt(new Position(4, 3))).to.be.equal(Cell.WHITE);
    expect(board.getCellAt(new Position(4, 4))).to.be.equal(Cell.BLACK);
  });

  it('should set the cell', ():void => {
    board.setCellAt(new Position(0, 0), Cell.WHITE);
    expect(board.getCellAt(new Position(0, 0))).to.be.equal(Cell.WHITE);
  })
});
