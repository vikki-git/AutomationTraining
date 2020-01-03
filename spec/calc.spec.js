describe('Suite 1', () => {
    it('test1', () => {
        expect(1).withContext('something else').toBe(1, 'Incorrect');
    })

    it('test2', () => {
        expect(1).withContext('something else').toBe(true, 'Incorrect');
    })
})
