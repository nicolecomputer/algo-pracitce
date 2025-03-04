function explore(nums: number[], index: number, prefix: number[]): number[][] {
    if (index >= nums.length) {
        return [prefix]
    }

    return [
        // Explore the tree

        // Where we add this number to the prefix
        ...explore(nums, index + 1, [...prefix, nums[index]]),
        
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