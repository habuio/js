const Calculator = require('../calculator');

beforeEach(() => {
    jest.resetModules();
});

test('the calculator starts at 0', () => {
    const calc = new Calculator();

    expect(calc.getValue()).toBe(0);
});

test('the calculator can be created with a starting number', () => {
    const calc = new Calculator(5);

    expect(calc.getValue()).toBe(5);
});

test('the calculator can be cleared to 0', () => {
    const calc = new Calculator(5);
    calc.clear();

    expect(calc.getValue()).toBe(0);
});

test('a number can be added using the sum() method on the calculator', () => {
    const calc = new Calculator();
    calc.sum(10);

    expect(calc.getValue()).toBe(10);
});

test('a number can be subtracted when using subtract() method on the calculator', () => {
    const calc = new Calculator(10);
    calc.subtract(5);

    expect(calc.getValue()).toBe(5);
});

test('a number can be divided when using divide() method on the calculator', () => {
    const calc = new Calculator(100);
    calc.divide(10);

    expect(calc.getValue()).toBe(10);
});

test('a number can be multiplied when using multiply() method on the calculator', () => {
    const calc = new Calculator(100);
    calc.multiply(10);

    expect(calc.getValue()).toBe(1000);
});

test('the state of the calculator is retained across operations', () => {
    const calc = new Calculator(0);
    calc.sum(15);

    expect(calc.getValue()).toBe(15);

    calc.subtract(5);
    expect(calc.getValue()).toBe(10);

    calc.multiply(100);
    expect(calc.getValue()).toBe(1000);

    calc.divide(50);
    expect(calc.getValue()).toBe(20);
});

test('the state can be cleared in between calculations', () => {
    const calc = new Calculator(0);
    calc.sum(15);

    expect(calc.getValue()).toBe(15);

    calc.subtract(5);
    expect(calc.getValue()).toBe(10);

    calc.clear();
    expect(calc.getValue()).toBe(0);

    calc.sum(15);
    expect(calc.getValue()).toBe(15);
});