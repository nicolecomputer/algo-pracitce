type Board = Spot[][]
type SpotId = number

enum Spot {
    Empty = ".",
    Queen = "Q"
}

export function nQueens(n: number): string[][] {
    const solutions = _nQueens(n, 0, initializeBoard(n, n));
    return solutions.map(board => board.map(row => row.join('')));
}

// Validation

function isValidSpots(spots: Spot[]): boolean {
    return spots.filter(s => s === "Q").length <= 1
}

function isValidBoard(board: Board): boolean {
    for (const spots of [
        ...allRows(board),
        ...allColumns(board),
        ...allDiagonals(board),
        ...allReverseDiagonals(board)
    ]) {
        if (!isValidSpots(spots)) {
            return false
        }
    }

    return true
}

// Get data sets

function extractColumn(board: Board, col: number): Spot[] {
    return board.map((row) => row[col])
}

function extractDiagonal(board: Board, startingCol: number): Spot[] {
    const result: Spot[] = [];
    let row = 0;
    let col = startingCol;

    while (row < board.length && col < board[0].length) {
        result.push(board[row][col]);
        row++;
        col++;
    }

    return result;
}

function extractReverseDiagonal(board: Board, startingCol: number): Spot[] {
    const result: Spot[] = [];
    let row = 0;
    let col = startingCol;

    while (row < board.length && col >= 0) {
        result.push(board[row][col]);
        row++;
        col--;
    }

    return result;
}

function allRows(board: Board): Spot[][] {
    return board
}

function allColumns(board: Board): Spot[][] {
    return board[0].map((_, col) => extractColumn(board, col))
}

function allDiagonals(board: Board): Spot[][] {
    const diagonals: Spot[][] = [];

    for (let col = 0; col < board[0].length; col++) {
        diagonals.push(extractDiagonal(board, col));
    }

    for (let row = 1; row < board.length; row++) {
        diagonals.push(extractDiagonal(board.slice(row), 0).map((spot, i) => board[row + i][i]));
    }

    return diagonals;
}

function allReverseDiagonals(board: Board): Spot[][] {
    const reverseDiagonals: Spot[][] = [];

    for (let col = 0; col < board[0].length; col++) {
        reverseDiagonals.push(extractReverseDiagonal(board, col));
    }

    for (let row = 1; row < board.length; row++) {
        const lastCol = board[0].length - 1;
        reverseDiagonals.push(
            extractReverseDiagonal(board.slice(row), lastCol)
                .map((spot, i) => board[row + i][lastCol - i])
        );
    }

    return reverseDiagonals;
}

function initializeBoard(numCols: number, numRows: number): Board {
    return Array(numRows).fill(null).map(() => Array(numCols).fill(Spot.Empty));
}

function numberOfSpotsIn(board: Board): number {
    return board.length * board[0].length
}

function spotIsAvailable(board: Board, spotId: SpotId): boolean {
    const col = spotId % board[0].length
    const row = Math.floor((spotId - col) / board[0].length)

    return board[row][col] === Spot.Empty
}

function newBoardWithQueenAt(spotId: SpotId, board: Board): Board {
    const newBoard = board.map(row => [...row]);
    const col = spotId % board[0].length;
    const row = Math.floor((spotId - col) / board[0].length);

    newBoard[row][col] = Spot.Queen;

    return newBoard;
}

function _nQueens(remainingQueens: number, startingSpotId: SpotId, board: Board): Board[] {
    if (remainingQueens === 0) {
        return [board]
    }

    const numSpots = numberOfSpotsIn(board)
    if (startingSpotId >= numSpots) {
        return []
    }

    let validSolutions: Board[] = []
    for (let spotId = startingSpotId; spotId < numSpots; spotId++) {
        if (spotIsAvailable(board, spotId)) {
            const nextBoard = newBoardWithQueenAt(spotId, board)
            if (isValidBoard(nextBoard)) {
                validSolutions.push(..._nQueens(remainingQueens - 1, spotId + 1, nextBoard))
            }
        }
    }

    return validSolutions
}
