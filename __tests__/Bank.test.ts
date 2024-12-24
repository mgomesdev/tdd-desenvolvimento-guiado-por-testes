import Bank from "../src/Bank";
import Money from "../src/Money";

describe("Class Bank", () => {
   it("reduce", () => {
      const bank = new Bank();
      const reduced = bank.reduce(Money.dollar(5), "USD");
      expect(Money.dollar(5)).toEqual(reduced);
   });

   it("addRate", () => {
      const bank = new Bank();
      bank.addRate("CHF", "USD", 2);
      const result = bank.reduce(Money.franc(2), "USD");

      expect(JSON.stringify(Money.dollar(1))).toBe(JSON.stringify(result));
   });

   it("Rate", () => {
      expect(1).toEqual(new Bank().rate("USD", "USD"));
   });
});
