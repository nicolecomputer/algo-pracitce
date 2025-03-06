export function combinationSum2(candidates: number[], total: number): number[][] {
    const groupedCandidates = candidates.sort()
    let a = search(groupedCandidates, total, [])
    console.log(a)
    return a
}

function sum(total: number, n: number): number {
    return total + n
}

function search(candidates: number[], target: number, prefix: number[]): number[][] {
    const totalSoFar = prefix.reduce(sum, 0)
    const top = candidates[0]

    if (totalSoFar === target) {
        return [prefix]
    }

    if (candidates.length === 0 || totalSoFar > target) {
        return []
    }

    let indexOfNextGroup = 1
    while (candidates[indexOfNextGroup - 1] == candidates[indexOfNextGroup]) {
        indexOfNextGroup += 1
    }

    return [
        // We'll use this number
        ...search(candidates.slice(1,), target, [...prefix, top]),

        // We will never use this number
        ...search(candidates.slice(indexOfNextGroup,), target, prefix),
    ]
}