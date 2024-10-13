const countDown = require("./index");

describe("countDown", () => {
  let originalLog;

  beforeAll(() => {
    originalLog = console.log;
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = originalLog;
  });

  it('Should log number in reverse order and print "All done!"', () => {
    countDown(3)
    expect(console.log).toHaveBeenNthCalledWith(1, 3);
    expect(console.log).toHaveBeenNthCalledWith(2, 2);
    expect(console.log).toHaveBeenNthCalledWith(3, 1);
    expect(console.log).toHaveBeenNthCalledWith(4, "All done!");
  });

  it("Should handle num <= 0", () => {
    countDown(0);
    expect(console.log).toHaveBeenCalledWith("All done!");

    console.log.mockClear();
    countDown(-1);

    expect(console.log).toHaveBeenCalledWith("All done!");
  });
});
