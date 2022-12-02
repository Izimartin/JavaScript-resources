import palindrome from './13-Palindrome';

describe('palindromeChecker', () => {
    it('should return palindrome true', () => {
        expect(palindrome("oso")).toBe(true);
        expect(palindrome("ana")).toBe(true);

    })
    it('should return palindrome false', () => {
        expect(palindrome("guitarra")).toBe(false);
        expect(palindrome("fabian")).toBe(false);
    })
})