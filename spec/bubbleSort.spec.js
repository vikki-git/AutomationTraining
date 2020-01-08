const {bubbleSort} = require("../src/1/homework/bubble");

describe('bubbleSort 1. ', () => {
    const array = [5, 2, 4, 9, 8, 1, 7];

    it('test 1', () => {
        const sortedArray = bubbleSort([...array]);
        const lastElement = sortedArray[array.length - 1];
        const maxElement = Math.max(...array);

        expect(lastElement).toBe(maxElement, 'Incorrect');

        console.log(sortedArray);
        console.log(array);
    })

    it('test 2', () => {
        const sortedArray = bubbleSort(array);
        const lastElement = sortedArray[array.length - 1];
        const maxElement = Math.max(...array);

        expect(lastElement).toBe(maxElement, 'Incorrect');

        console.log(sortedArray);
        console.log(array);
    })
})
