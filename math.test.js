// the operation should return he sum of numbers
const { addition } = require("./addition");

test("2 + 3 = 5", () => {
    expect(addition(2, 3)).toBe(5);
});

// test("1 + 7 = 8", () => {
//     expect(addition(1, 7)).toBe(8);
// });

test.skip("1 + 7 = 8", () => {
    expect(addition(1, 7)).toBe(8);
});
