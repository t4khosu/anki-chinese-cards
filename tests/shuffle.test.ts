import shuffle from '../src/utils/shuffle';

describe("shuffle", () => {
    it('Empty array returns an empty array', () => {
        expect(shuffle<number>([], new Date())).toStrictEqual([]);
    })

    it('Array with one element returns this array', () => {
        expect(shuffle<number>([1], new Date())).toStrictEqual([1]);
    })

    it('Shuffling does not change the original array', () => {
        // Arrange
        const array = [1, 2, 3, 4, 5, 6, 7, 8]
        const date = new Date(2020, 0, 1)

        // Act
        const shuffled = shuffle<number>(array, date);

        // Assert
        expect(array).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(array).not.toStrictEqual(shuffled)
    })

    it('Shuffling with the same date returns the same result', () => {
        // Arrange
        const array = [1, 2, 3, 4, 5, 6, 7, 8]
        const date = new Date(2020, 0, 1)

        // Act
        const shuffled1 = shuffle<number>(array, date);
        const shuffled2 = shuffle<number>(array, date);

        // Assert
        expect(shuffled1).toStrictEqual(shuffled2)
    })
});
