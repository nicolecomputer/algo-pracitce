type Board = string[]
type SpotId = number

const emptyBoard = [
    "....",
    "....",
    ".....",
    "....."
]

export function nQueens(n: number): Board[] {
    return _nQueens(n, emptyBoard)
}


function spotIsOccupied(spot: SpotId, board: Board): boolean {
    return false
}

function validBoard(board: Board): boolean {
    return false
}

function _nQueens(remainingQueens: number, board: Board): Board[] {
    if (remainingQueens === 0) {
        return [board]
    }
}