export function subsets(nums: number[]): number[][] {
    if (nums.length === 0){
        return [[]]
    }

    return [[], [nums[0]]]
}