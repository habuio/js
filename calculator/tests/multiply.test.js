const multiply = require('../multiply');

test('multiplying 10 by 100 equals 1000', () => {
    expect(multiply(10, 100)).toBe(1000);
});