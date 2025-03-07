export function subsets(nums: number[]): number[][] {
    return _subsets(nums.sort(), [])
}

function _subsets(nums: number[], prefix: number[]): number[][] {
    if (nums.length === 0) {
        return [prefix]
    }

    let indexOfNextGroup = 1;
    while (nums[indexOfNextGroup - 1] === nums[indexOfNextGroup]) {
        indexOfNextGroup += 1
    }

    return [
        ..._subsets(nums.slice(indexOfNextGroup), prefix),
        ..._subsets(nums.slice(1), [nums[0], ...prefix])
    ]
}