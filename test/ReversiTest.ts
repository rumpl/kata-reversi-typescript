import { Color, Reversi, Vector } from "../src/Reversi";
import { expect } from 'chai';

describe("Reversi", () => {

  let createEmptyBoard: () => Color[][] = function(){
    let board : Color[][] = [];
    for (let i:number = 0; i<8; i++) {
      board[i] = [];
      for (let j:number = 0; j<8; j++) {
        board[i].push(Color.Empty);
      }
    }

    return board;
  }

  it("Should not be able to play on an empty board", () => {
    // given
    let reversi : Reversi = new Reversi(createEmptyBoard(), Color.Black);
    // when
    let positions : Vector[] = reversi.possiblePositions();
    // then
    expect(positions.length).to.be.equal(0);
  })

  it("Should not be able to play on an empty board with only one piece", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[0][1] = Color.White;
    let reversi : Reversi = new Reversi(createEmptyBoard(), Color.Black);
    // when
    let positions : Vector[] = reversi.possiblePositions();
    // then
    expect(positions.length).to.be.equal(0);
  })

  it("Should not be able to play on a full board", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board.forEach((row, x) => {
      row.forEach((status, y) => {
        row[y] = Color.White;
      });
    });
    let reversi : Reversi = new Reversi(createEmptyBoard(), Color.Black);
    // when
    let positions : Vector[] = reversi.possiblePositions();
    // then
    expect(positions.length).to.be.equal(0);
  })

  it("Should be able to play on an empty cell with one piece white and one piece black on the right", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[1][0] = Color.White;
    board[2][0] = Color.Black;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let result = reversi.isPossiblePosition(0, 0);

    // then
    expect(result).to.be.equal(true);
  })

  it("Should be able to play on an empty cell with several pieces white and one piece black on the right", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[1][0] = Color.White;
    board[2][0] = Color.White;
    board[3][0] = Color.White;
    board[4][0] = Color.Black;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let result = reversi.isPossiblePosition(0, 0);

    // then
    expect(result).to.be.equal(true);
  })

  it("Should be able to play on an empty cell with several pieces white and one piece black on the left", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[0][0] = Color.Black;
    board[1][0] = Color.White;
    board[2][0] = Color.White;
    board[3][0] = Color.White;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let result = reversi.isPossiblePosition(4, 0);

    // then
    expect(result).to.be.equal(true);
  })

  it("Should be able to play on an empty cell with several pieces white and one piece black above", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[0][0] = Color.Black;
    board[0][1] = Color.White;
    board[0][2] = Color.White;
    board[0][3] = Color.White;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let result = reversi.isPossiblePosition(0, 4);

    // then
    expect(result).to.be.equal(true);
  })

  it("Should be able to play on an empty cell with several pieces white and one piece black below", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[0][1] = Color.White;
    board[0][2] = Color.White;
    board[0][3] = Color.White;
    board[0][4] = Color.Black;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let result = reversi.isPossiblePosition(0, 0);

    // then
    expect(result).to.be.equal(true);
  })

  it("Should be able to play on an empty cell with several pieces white and one piece black below left", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[1][1] = Color.White;
    board[2][2] = Color.White;
    board[3][3] = Color.White;
    board[4][4] = Color.Black;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let result = reversi.isPossiblePosition(0, 0);

    // then
    expect(result).to.be.equal(true);
  })

  it("Should be able to play on an empty cell with several pieces white and one piece black below right", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[4][1] = Color.White;
    board[3][2] = Color.White;
    board[2][3] = Color.White;
    board[1][4] = Color.Black;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let result = reversi.isPossiblePosition(5, 0);

    // then
    expect(result).to.be.equal(true);
  })

  it("Should be able to play on an empty cell with several pieces white and one piece black above right", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[1][1] = Color.Black;
    board[2][2] = Color.White;
    board[3][3] = Color.White;
    board[4][4] = Color.White;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let result = reversi.isPossiblePosition(5, 5);

    // then
    expect(result).to.be.equal(true);
  })

  it("Should be able to play on an empty cell with several pieces white and one piece black above left", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[4][1] = Color.Black;
    board[3][2] = Color.White;
    board[2][3] = Color.White;
    board[1][4] = Color.White;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let result = reversi.isPossiblePosition(0, 5);

    // then
    expect(result).to.be.equal(true);
  })


  it("Should give all possible positions at the beginning of the game", () => {
    // given
    let board : Color[][] = createEmptyBoard();
    board[4][4] = Color.Black;
    board[5][5] = Color.Black;
    board[4][5] = Color.White;
    board[5][4] = Color.White;
    let reversi : Reversi = new Reversi(board, Color.Black);

    // when
    let results : Vector[] = reversi.possiblePositions();

    // then
    expect(results.length).to.be.equal(4);
    expect(results).to.deep.include.members([[5,3],[6,4],[3,5],[4,6]]);
  })


});
