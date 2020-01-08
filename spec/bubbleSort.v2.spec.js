const {bubbleSort} = require("../src/1/homework/bubble");

describe('bubbleSort 1. ', () => {
    const array = [5, 2, 4, 9, 8, 1, 7, -1, -6, 10, 15, 8];

    it('test 1', () => {
        const sortedArray = bubbleSort([...array]);
        const lastElement = sortedArray[array.length - 1];
        const maxElement = Math.max(...array);

        expect(lastElement).toEqual(maxElement, 'Incorrect');

        console.log(sortedArray);
        console.log(array);
    })

    it('test 1', () => {
        const sortedArray = bubbleSort([...array]);
        const expectedSortedArray = array.sort();
        // const expectedSortedArray = array.sort((a, b) => a - b);

        expect(sortedArray).toEqual(expectedSortedArray, 'Incorrect');

        console.log(sortedArray === expectedSortedArray);
        console.log(sortedArray);
        console.log(expectedSortedArray);
    })

    // it('test 2', () => {
    //     const sortedArray = bubbleSort(array);
    //     const lastElement = sortedArray[array.length - 1];
    //     const maxElement = Math.max(...array);
    //
    //     expect(lastElement).toBe(maxElement, 'Incorrect');
    //
    //     console.log(sortedArray);
    //     console.log(array);
    // })
})
