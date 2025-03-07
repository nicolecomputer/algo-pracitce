export function telephone(phone: string): string[] {
    const nums = phone.split("").map(i => parseInt(i))

    if (nums.length === 0) {
        return []
    }

    return stringForTelephoneDigits(nums, [])
        .map(i => i.join(""))
}

const phoneMap: { [digit: number]: string[] } = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
}

function stringForTelephoneDigits(digits: number[], prefix: string[]): string[][] {
    if (digits.length === 0) {
        return [prefix]
    }

    const val = digits[0]

    return (phoneMap[val] ?? []).flatMap((char: string) => {
        return stringForTelephoneDigits(digits.slice(1,), [...prefix, char])
    })
}

