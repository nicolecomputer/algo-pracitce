function explore(nums: number[], index: number, prefix: number[]): number[][] {
    if (index >= nums.length) {
        return [prefix]
    }

    // Explore the tree
    const cur = nums[index]

    return [

        // Where we add this number to the prefix
        ...explore(nums, index + 1, [...prefix, cur]),

        // And where we don't add this number to the prefix
        ...explore(nums, index + 1, prefix)
    ]
}


export function subsets(nums: number[]): number[][] {
    if (nums.length === 0) {
        return [[]]
    }

    return explore(nums, 0, [])
}