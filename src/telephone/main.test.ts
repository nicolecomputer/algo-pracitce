import { telephone } from "./main"

describe("telephone", () => {
    it("returns abc for 2", () => {
        const expected = ['a', 'b', 'c']
        const result = telephone("2")

        expect(result).toEqual(expected)
    })
})