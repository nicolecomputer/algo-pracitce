import { combinationSumSolution } from "./main";

describe("combination sum", () => {
    test("test 1", () => {
        const expected = [[2, 2, 5], [9]]
        const result = combinationSumSolution(
            [2, 5, 6, 9], 9
        )
        expect(result).toEqual(expected)
    })
})