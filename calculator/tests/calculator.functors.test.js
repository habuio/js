jest.mock('../calculate');
jest.mock('../sum');
jest.mock('../subtract');
jest.mock('../divide');
jest.mock('../multiply');

const calculate = require('../calculate');
const sum = require('../sum');
const subtract = require('../subtract');
const divide = require('../divide');
const multiply = require('../multiply');

const Calculator = require('../calculator');

const mockCalc = (a, b, fn) => fn(a, b);

test('the calculator uses calculate() when calling Calculator.sum()', () => {
    const calc = new Calculator();
    calc.sum(10);

    expect(calculate).toBeCalled();
});

test('the calculator uses sum() when calling Calculator.sum()', () => {
    calculate.mockImplementationOnce(mockCalc);
    const calc = new Calculator();
    calc.sum(10);

    expect(sum).toBeCalled();
});

test('the calculator uses calculate() when calling Calculator.subtract()', () => {
    const calc = new Calculator(10);
    calc.subtract(5);

    expect(calculate).toBeCalled();
});

test('the calculator uses subtract() when calling Calculator.subtract()', () => {
    calculate.mockImplementationOnce(mockCalc);
    const calc = new Calculator(10);
    calc.subtract(5);

    expect(subtract).toBeCalled();
});

test('the calculator uses calculate() when calling Calculator.divide()', () => {
    const calc = new Calculator(10);
    calc.divide(5);

    expect(calculate).toBeCalled();
});

test('the calculator uses subtract() when calling Calculator.divide()', () => {
    calculate.mockImplementationOnce(mockCalc);
    const calc = new Calculator(10);
    calc.divide(5);

    expect(divide).toBeCalled();
});

test('the calculator uses calculate() when calling Calculator.multiply()', () => {
    const calc = new Calculator(10);
    calc.multiply(5);

    expect(calculate).toBeCalled();
});

test('the calculator uses subtract() when calling Calculator.multiply()', () => {
    calculate.mockImplementationOnce(mockCalc);
    const calc = new Calculator(10);
    calc.multiply(5);

    expect(multiply).toBeCalled();
});