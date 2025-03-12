class VisitHistory {
    private set: Set<string>

    constructor() {
        this.set = new Set()
    }

    addPosition(spot: Spot) {
        this.set.add(this.toSetKey(spot))
    }

    haveVisited(spot: Spot): boolean {
        return this.set.has(this.toSetKey(spot))
    }

    private toSetKey(spot: Spot) {
        return `${spot.row}-${spot.col}`
    }
}

enum TileState {
    Land = "1",
    Water = "0"
}

type Spot = {
    row: number,
    col: number
}

type Grid = TileState[][]

export function numberOfIslands(grid: Grid): number {
    const history = new VisitHistory()
    let islandCount = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const currentSpot = { row, col }

            if (grid[row][col] === TileState.Land && !history.haveVisited(currentSpot)) {
                exploreIsland(grid, history, currentSpot)
            }
        }
    }

    return islandCount
}

function exploreIsland(grid: Grid, history: VisitHistory, startingSpot: Spot) {
    let toExplore = [startingSpot]

    while (toExplore.length > 0) {
        const current = toExplore.pop()!

        history.addPosition(current)

        const nextSpots = neighboringSpots(current)
            .filter(spot => isInBounds(grid, spot))
            .filter(spot => !history.haveVisited(spot))

        toExplore.push(...nextSpots)
    }
}

function isInBounds(grid: Grid, spot: Spot): boolean {
    return spot.row >= 0 && spot.col >= 0
        && spot.row < grid.length && spot.col < grid[0].length
}

function neighboringSpots(spot: Spot): Spot[] {
    return [
        { row: spot.row + 1, col: spot.col },
        { row: spot.row - 1, col: spot.col },
        { row: spot.row, col: spot.col + 1 },
        { row: spot.row, col: spot.col - 1 },
    ]
}