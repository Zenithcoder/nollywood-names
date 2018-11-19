const nollywoodnames = require('./index');

describe('Test for all nollywood array', () => {

    test('to have length four', () => {
        expect(nollywoodnames.all).toHaveLength(4);
    });


    test('should contain Onyi Alex', () => {
        expect(nollywoodnames.all).toContain('Onyi Alex');
    });
});

describe('test for random array', () => {
    test('to have length one', () => {
        expect(nollywoodnames.random).toHaveLength(1);
    });
});