import palindromeChecker from './isPalindrome';

describe('palindromeChecker', () => {
    it('should return palindrome true', () => {
        expect(palindromeChecker("oso")).toBe(true);
        expect(palindromeChecker("ana")).toBe(true);

    })
    it('should return palindrome false', () => {
        expect(palindromeChecker("guitarra")).toBe(false);
        expect(palindromeChecker("fabian")).toBe(false);
    })
})