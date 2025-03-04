import { search, combinationSumSolution } from "./main2";

describe("combinationSumSolution", () => {
    test("an empty set of numbers", () => {
        const expected: number[][] = []
        const result = combinationSumSolution(
            [],
            10
        )

        expect(result).toEqual(expected)
    })

    test("single number equals target", () => {
        expect(combinationSumSolution([5], 5)).toEqual([[5]])
    })

    test("no solution exists", () => {
        expect(combinationSumSolution([2, 3], 1)).toEqual([])
    })

    test("different orderings of the same numbers should only appear once", () => {
        const result = combinationSumSolution([2, 3], 5)
        expect(result).toEqual([[2, 3]])
    })

    test("test 1", () => {
        const expected = [[2, 2, 5], [9]]
        const result = combinationSumSolution(
            [2, 5, 6, 9], 9
        )

        expect(result).toEqual(expected)
    })
})