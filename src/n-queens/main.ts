type Board = Spot[][]
type SpotId = number

enum Spot {
    Empty = ".",
    Queen = "Q"
}

export function nQueens(n: number): string[][] {
    _nQueens(n, 0, initializeBoard(5, 5))
    return []
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
    return board.map((_, row) => board[row][col])
}

function extractDiagonal(board: Board, startingCol: number): Spot[] {
    throw new Error("not implemented")
}

function extractReverseDiagonal(board: Board, startingCol: number): Spot[] {
    throw new Error("not implemented")
}

function allRows(board: Board): Spot[][] {
    return board
}

function allColumns(board: Board): Spot[][] {
    return board[0].map((_, col) => extractColumn(board, col))
}

function allDiagonals(board: Board): Spot[][] {
    return board[0].map((_, col) => extractDiagonal(board, col))
}

function allReverseDiagonals(board: Board): Spot[][] {
    return board[0].map((_, col) => extractReverseDiagonal(board, col))
}




function initializeBoard(numCols: number, numRows: number): Board {
    return new Array(numRows).map(_ => new Array(numCols).fill(".") as Spot[])
}

function numberOfSpotsIn(board: Board): number {
    return board.length * board[0].length
}


function spotIsAvailable(board: Board, spotId: SpotId): boolean {
    const col = spotId % board[0].length
    const row = (spotId - col) / board[0].length

    return board[row][col] === "."
}

function newBoardWithQueenAt(spotId: SpotId, board: Board): Board {
    throw new Error("not implemented")
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

// Utilities