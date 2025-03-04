class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number) {
        return setForCombination(nums, [], target)
    }
}

export function combinationSumSolution(nums: number[], target: number): number[][] {
    return setForCombination(nums, [], target)
}

function sum(total: number = 0, n: number): number {
    return total + n
}

function notEmpty<T>(a: Array<T>): boolean {
    return a.length > 0
}

function sameList(a: number[], b: number[]): boolean {
    if (a.length !== b.length) {
        return false
    }

    let remainingB = [...b]

    for (let item of a) {
        const indexInB = remainingB.findIndex(v => v === item)
        if (indexInB === -1) {
            return false
        }
        remainingB.splice(indexInB, 1)
    }

    return remainingB.length === 0
}

function seenSet(seen: number[][], target: number[]): number[][] {
    let nextSeen = [...seen]

    let hasBeenSeen = false
    for (const s of seen) {
        if (sameList(s, target)) {
            hasBeenSeen = true
        }
    }

    if (!hasBeenSeen) {
        nextSeen.push(target)
    }

    return nextSeen
}

function setForCombination(nums: number[], chosenSoFar: number[], target: number): number[][] {
    const totalSoFar = chosenSoFar.reduce(sum, 0)
    if (totalSoFar === target) {
        return [chosenSoFar]
    }
    if (totalSoFar > target) {
        return [[]]
    }

    return nums
        .flatMap(n => setForCombination(nums, [...chosenSoFar, n], target))
        .filter(notEmpty)
        .reduce(seenSet, [])
}