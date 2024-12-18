import Fibonacci from "../../src/Fibonacci";

describe("Fibonacci", () => {
   it("Test Fibonacci", () => {
      const cases: number[][] = [
         [0, 0],
         [1, 1],
         [2, 1],
         [3, 2],
      ];

      for (let i = 0; i < cases.length; i++) {
         expect(cases[i][1]).toEqual(Fibonacci.fib(cases[i][0]));
      }
   });
});
