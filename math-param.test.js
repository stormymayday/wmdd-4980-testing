// the operation should return he sum of numbers
const { addition } = require("./addition");

test.each([
    [3, 4, 7],
    [5, -10, -5],
    [0, 2, 2],
])("a + b = c", (a, b, expected) => {
    expect(addition(a, b)).toBe(expected);
});

// test("1 + 7 = 8", () => {
//     expect(addition(1, 7)).toBe(8);
// });
