const {bubbleSort} = require("../src/1/homework/bubble");

describe('bubbleSort. ', () => {
    it('Sort. ', () => {
        expect(bubbleSort([5, 2, 4, 9, 8]))
            .toEqual([2, 4, 5, 8, 9], 'Incorrect');
    })

    it('Verify numerical digits. ', () => {
        expect(bubbleSort([5, 2, 4, 9, 8, 10, 15, 8]))
            .toEqual([5, 2, 4, 9, 8, 10, 15, 8].sort((a, b) => a - b), 'Incorrect');
    })

    it('Verify positive/negative number sign. ', () => {
        expect(bubbleSort([5, 2, 4, 9, 8, 1, 7, -1, -6]))
            .toEqual([5, 2, 4, 9, 8, 1, 7, -1, -6].sort((a, b) => a - b), 'Incorrect');
    })

    it('Verify duplicated values. ', () => {
        expect(bubbleSort([5, 2, 4, 9, 8, 1, 7, 0, 4, -1, -6, 2, 8, 2]))
            .toEqual([5, 2, 4, 9, 8, 1, 7, 0, 4, -1, -6, 2, 8, 2].sort((a, b) => a - b), 'Incorrect');
    })

    it('Max element', () => {
        const array = [5, 2, 4, 9, 8, 1, 7, -1, -6, 10, 15, 8];
        const sortedArray = bubbleSort([...array]);
        const lastElement = sortedArray[array.length - 1];
        const maxElement = Math.max(...array);

        expect(lastElement).toEqual(maxElement, 'Incorrect');
    })

    it('Min element', () => {
        const array = [5, 2, 4, 9, 8, 1, 7, -1, -6, 10, 15, 8];
        const sortedArray = bubbleSort([...array]);
        const firstElement = sortedArray[0];
        const minElement = Math.min(...array);

        expect(firstElement).toEqual(minElement, 'Incorrect');
    })
})
