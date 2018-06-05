const calculate = require('../calculate');

test('the higher order function calls the passed function with passed parameters', () => {
    const fn = jest.fn();
    const a = 5;
    const b = 5;

    calculate(a, b, fn);

    expect(fn).toBeCalled();
    expect(fn).toBeCalledWith(a, b);
});

test('the higher order function returns the result of the passed function call', () => {
    function test(a, b) {
        return 2;
    }

    expect(calculate(2, 2, test)).toBe(2);
});