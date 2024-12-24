import Bank from "../src/Bank";
import Money, { Expression } from "../src/Money";
import Sum from "../src/Sum";

describe("Class Money", () => {
   it("equals", () => {
      const five = Money.dollar(5);
      expect(Money.dollar(10).equals(five.times(2)));
      expect(Money.dollar(15).equals(five.times(3)));
   });

   it("times", () => {
      const fiveBucks = Money.dollar(5) as Expression;
      const tenFrancs = Money.franc(10) as Expression;
      const bank = new Bank();
      bank.addRate("CHF", "USD", 2);
      const sum = new Sum(fiveBucks, tenFrancs).times(2) as Expression;
      const result = bank.reduce(sum, "USD");

      expect(Money.dollar(20)).toEqual(result);
   });

   it("currency", () => {
      expect(Money.dollar(1).currency()).toBe("USD");
      expect(Money.franc(1).currency()).toBe("CHF");
   });

   it("toString", () => {
      const money = Money.dollar(5) as Expression;
      expect(money.toString()).toBe("5 USD");
   });

   it("dollar", () => {
      const bank = new Bank();
      const result = bank.reduce(Money.dollar(1), "USD");

      expect(result).toEqual(Money.dollar(1));
   });

   it("franc", () => {
      expect(Money.franc(1).currency()).toBe("CHF");
   });

   it("plus", () => {
      const sum = Money.dollar(1).plus(Money.dollar(1));
      expect(sum instanceof Money);
   });

   it("reduce", () => {
      const sum = new Sum(Money.dollar(3), Money.dollar(4));
      const bank = new Bank();
      const result = bank.reduce(sum, "USD");
      expect(Money.dollar(7)).toEqual(result);
   });
});
