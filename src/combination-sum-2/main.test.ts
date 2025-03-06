import { combinationSum2 } from "./main";

describe("combinationSum2", () => {
    test("test1", () => {
        const expected = [
            [1, 2, 5],
            [2, 2, 4],
            [2, 6]
        ]

        const result = combinationSum2([9, 2, 2, 4, 6, 1, 5], 8)

        expect(result).toEqual(expected)
    })
})