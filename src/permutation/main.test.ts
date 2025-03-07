import { permutation } from "./main";


describe("permutation", () => {
    test("when passed an empty set, it returns empty", () => {
        const expected: number[][] = []
        const result = permutation([])

        expect(result).toEqual(expected)
    })

    test("when given a single number it returns the number", () => {
        const expected: number[][] = [[1]]
        const result = permutation([1])

        expect(result).toEqual(expected)
    })

    test("When giben two numbers returns a permutation", () => {
        const expected: number[][] = [[1, 2], [2, 1]]
        const result = permutation([1, 2])

        expect(result).toEqual(expected)
    })
})