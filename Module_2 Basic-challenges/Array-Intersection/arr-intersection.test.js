const arrIntersection = require("./arr-intersection");

test("Find intersection in different array", () => {
 expect(arrIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
 expect(arrIntersection([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([]);
});
