export type GridLocation = number

export type GridSpot = {
    location: GridLocation
    value: string
}

function lastItem<T>(items: Array<T>): T {
    return items[items.length - 1]
}

export class WordSearch {
    public grid: string[][]

    constructor(grid: string[][]) {
        this.grid = grid
    }

    private get numRows(): number {
        return this.grid.length
    }

    private get numCols(): number {
        return this.grid[0].length
    }

    neighbors(location: GridLocation): GridSpot[] {
        const col = location % this.numCols
        const row = (location - col) / this.numCols

        let locations: GridSpot[] = []

        if (row > 0) {
            locations.push({
                location: this.numCols * (row - 1) + col,
                value: this.grid[row - 1][col]
            })
        }
        if (row < this.numRows - 1) {
            locations.push({
                location: this.numCols * (row + 1) + col,
                value: this.grid[row + 1][col]
            })
        }
        if (col > 0) {
            locations.push({
                location: this.numCols * row + col - 1,
                value: this.grid[row][col - 1]
            })
        }
        if (col < this.numCols - 1) {
            locations.push({
                location: this.numCols * row + col + 1,
                value: this.grid[row][col + 1]
            })
        }

        return locations
    }

    containsWord(word: string): boolean {
        const letters = word.toUpperCase().split("")

        if (letters.length === 0) {
            return false
        }

        const startingLetter = letters[0]
        const startingLetterLocs = this.findAllLetters(startingLetter)

        if (letters.length === 1) {
            return startingLetterLocs.length > 0
        }

        for (const loc of startingLetterLocs) {
            const contains = this.searchContainsWord(letters.slice(1,), [loc])
            if (contains) {
                return true
            }
        }

        return false
    }

    private searchContainsWord(wordFragment: string[], pathSoFar: GridLocation[]): boolean {
        if (wordFragment.length === 0) {
            return true
        }

        const currentLocation = lastItem(pathSoFar)
        const neighbors = this.neighbors(currentLocation)
        const nextLetter = wordFragment[0]

        const validNeighbors = neighbors
            .filter(v => !pathSoFar.includes(v.location))
            .filter(v => v.value === nextLetter)

        for (const n of validNeighbors) {
            const contains = this.searchContainsWord(wordFragment.slice(1,), [...pathSoFar, n.location])
            if (contains) {
                return true
            }
        }

        return false
    }

    findLetter(letter: string): GridLocation {
        for (let row = 0; row < this.numRows; row++) {
            for (let col = 0; col < this.numCols; col++) {
                if (this.grid[row][col] === letter) {
                    return this.numCols * row + col;
                }
            }
        }
        return -1;
    }

    findAllLetters(letter: string): GridLocation[] {
        let locations: GridLocation[] = []
        for (let row = 0; row < this.numRows; row++) {
            for (let col = 0; col < this.numCols; col++) {
                if (this.grid[row][col] === letter) {
                    locations.push(this.numCols * row + col);
                }
            }
        }

        return locations;
    }
}