export function permutation(nums: number[]): number[][] {
    if (nums.length === 0) {
        return []
    }

    return _permutation(nums, [])
}

function _permutation(nums: number[], prefix: number[]): number[][] {
    if (nums.length === 0) {
        return [prefix]
    }

    return nums.flatMap((value, i) => {
        const nextArray = nums.filter((_, index) => index != i)

        return _permutation(nextArray, [...prefix, value])
    })
}