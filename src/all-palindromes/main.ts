export function isPalindrome(s: string): boolean {
    if (s.length < 2) {
        return true
    }

    const length = s.length;
    for (let i = 0; i < length / 2; i++) {
        if (s[i] !== s[length - 1 - i]) {
            return false
        }
    }

    return true
}

export function palindromePartition(s: string): string[][] {
    return _palindromPartition(s, [])
}

function _palindromPartition(s: string, prefix: string[]): string[][] {
    if (s.length === 0) {
        return [prefix]
    }

    let palindromes = []
    for (let splitLocation = 1; splitLocation <= s.length; splitLocation++) {
        const splitString = s.slice(0, splitLocation)

        if (isPalindrome(splitString)) {
            const rest = s.slice(splitLocation)
            const result = _palindromPartition(rest, [...prefix, splitString])
            palindromes.push(...result)
        }
    }
    return palindromes
}