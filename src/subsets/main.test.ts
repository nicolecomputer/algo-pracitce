import { subsets } from "./main"

describe("subsets", () => {
    it("returns an empty set when no numbers are given", () => {
        const expected = [[]]
        const result = subsets([])

        expect(expected).toEqual(result)
    
    })

    test("example 1", () => {
        const expected = [[], [7]]
        const result = subsets([7])

        expect(expected).toEqual(result)
    })
})