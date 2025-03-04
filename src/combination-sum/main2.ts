export function combinationSumSolution(nums: number[], target: number): number[][] {
    return search(nums, [], target)
}

function sum(total: number = 0, n: number): number {
    return total + n
}


export function search(nums: number[], prefix: number[], target: number): number[][] {
    const total = prefix.reduce(sum, 0)

    if (total === target) {
        return [prefix]
    }

    if (nums.length == 0) {
        return []
    }

    if (total > target) {
        return []
    }


    return [
        ...search(
            nums,
            [...prefix, nums[0]],
            target
        ),
        ...search(nums.slice(1), prefix, target)
    ]
}