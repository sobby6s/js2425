//This is a test
describe("helloWorld", () => {
  it("returns Hello World", () => {
    var actual = helloWorld();
    expect(actual).toBe("Hello World");
  });
  it("returns Hello ", () => {
    var actual = helloWorld();
    expect(actual).toContain("hello");
  });
});

describe("math sum", function () {
  it("suma dintre 3 si 5", function () {
    expect(sum(3, 5)).toBe(8);
  });
});
describe("math sum2", function () {
  it("suma dintre 1.4 si 1.3", function () {
    expect(sum(1.4, 1.3)).toEqual(2.7);
  });
  // it("suma dintre 0.1 si 0.7", function () {
  //   expect(sum(0.1, 0.7)).toEqual(0.8);
  // });
});
