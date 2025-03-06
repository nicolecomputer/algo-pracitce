import { WordSearch } from "./main"
import type { GridLocation } from "./main";
const sampleGrid1 = [
    ["A", "B", "C", "D"],
    ["S", "A", "A", "T"],
    ["A", "C", "A", "E"]
];

const grid = new WordSearch(sampleGrid1)

describe("WordSearch", () => {
    describe("containsWord", () => {
        test("empty strings are always false", () => {
            const expected = false
            const result = grid.containsWord("")

            expect(result).toEqual(expected)
        })

        test("finds single letter words", () => {
            const expected = true
            const result = grid.containsWord("C")

            expect(result).toEqual(expected)
        })

        test("does not find single letter words not in grid", () => {
            const expected = false
            const result = grid.containsWord("Z")

            expect(result).toEqual(expected)
        })

        test("contains cat", () => {
            const expected = true
            const result = grid.containsWord("cat")

            expect(result).toEqual(expected)
        })


        test("does not contains bat", () => {
            const expected = false
            const result = grid.containsWord("bat")

            expect(result).toEqual(expected)
        })
    })

    describe("find letter", () => {
        test("if the letter is in the grid it returns -1", () => {
            const expected = -1
            const result = grid.findLetter("Z")

            expect(result).toEqual(expected)
        })

        test("it finds a letter", () => {
            const expected = 0
            const result = grid.findLetter("A")

            expect(result).toEqual(expected)
        })

        test("it finds another letter", () => {
            const expected = 4
            const result = grid.findLetter("S")

            expect(result).toEqual(expected)
        })
    })

    describe("findAllLetters", () => {
        test("it finds A's", () => {
            const expected: GridLocation[] = [0, 5, 6, 8, 10]
            const result = grid.findAllLetters("A")

            expect(result).toEqual(expected)
        })
    })
})