class VisitHistory {
    private set: Set<string>

    constructor() {
        this.set = new Set()
    }

    addPosition(row: number, col: number) {
        this.set.add(this.toSetKey(row, col))
    }

    haveVisited(row: number, col: number): boolean {
        return this.set.has(this.toSetKey(row, col))
    }

    private toSetKey(row: number, col: number) {
        return `${row}-${col}`
    }
}

enum TileState {
    Land = "1",
    Water = "0"
}

type Grid = TileState[][]

export function numberOfIslands(grid: Grid): number {
    throw new Error("not implemented")
}