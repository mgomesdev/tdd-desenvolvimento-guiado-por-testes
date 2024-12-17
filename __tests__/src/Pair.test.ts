import Pair from "../../src/Pair";

describe("PairClass", () => {
   it("equals", () => {
      const pair1 = new Pair("USD", "CHF");
      const pair2 = new Pair("USD", "CHF");

      expect(pair1.equals(pair2)).toBeTruthy();
   });

   it("hashCode", () => {
      const pair = new Pair("USD", "CHF");
      expect(pair.hashCode()).toBe(0);
   });

   it("toString", () => {
      const pair1 = new Pair("USD", "CHF");
      expect(pair1.toString()).toBe("USD-CHF");
   });
});
