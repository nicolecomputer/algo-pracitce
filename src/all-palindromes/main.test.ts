import { isPalindrome, palindromePartition } from "./main";

describe("isPalindrome", () => {
    test("single character strings are palindromes", () => {
        const expected = true
        const result = isPalindrome("a")

        expect(result).toEqual(expected);
    })

    test("repeated characters are a palindrome", () => {
        const expected = true
        const result = isPalindrome("aaaa")

        expect(result).toEqual(expected)
    })

    test("not palindrome", () => {
        const expected = false
        const result = isPalindrome("abca")

        expect(result).toEqual(expected)
    })

    test("not palindrome 2", () => {
        const expected = false
        const result = isPalindrome("abczdba")

        expect(result).toEqual(expected)
    })
})

describe("palindromePartition", () => {
    test.only("aab", () => {
        const expected = [["a", "a", "b"], ["aa", "b"]]
        const result = palindromePartition("aab")

        expect(result).toEqual(expected)
    })
})