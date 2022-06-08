import getSecondLargest from './SecondLargestNumber';

describe('checkSecondLargestNumber', () => {
    it('should return second largest number in the array', () => {
        expect(getSecondLargest([10, 20, 40, 30, 80, 90])).toBe(80);
        expect(getSecondLargest([10, 20, 40, 30, 85, 100])).toBe(85);
    })
})