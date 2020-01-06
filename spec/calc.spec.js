// import {multiply} from "../src/calc.v1";
const {multiply} = require("../src/1/homework/calc.v1");
const {calc} = require("../src/1/homework/calc.v1");

describe('Suite 1', () => {
    it('test1', () => {
        expect(multiply(2, 3)).withContext('function').toBe(2 * 3, 'Incorrect');
    })

    it('test2', () => {
        expect(calc.sum(5, 6)).withContext('object').toBe(5 + 6, 'Incorrect');
    })

    it('test3 - typeof calc', () => {
        expect(typeof calc.getDate()).toBe('object', 'Incorrect');
    })
})
