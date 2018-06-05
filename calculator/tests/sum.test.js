const sum = require('../sum');

test('adding 1 to 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});