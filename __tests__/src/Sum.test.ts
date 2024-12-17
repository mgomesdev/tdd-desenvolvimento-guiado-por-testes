import Bank from "../../src/Bank";
import Money from "../../src/Money";
import Sum from "../../src/Sum";

describe("Sum Class Tests", () => {
   let bank: Bank;

   beforeEach(() => {
      bank = new Bank();
      bank.addRate("USD", "CHF", 1.5);
      bank.addRate("USD", "EUR", 0.9);
   });

   it("Deve criar uma soma e reduzi-la para uma moeda diferente (CHF)", () => {
      const fiveDollars = new Money(5, "USD");
      const tenDollars = new Money(10, "USD");

      const sum = new Sum(fiveDollars, tenDollars);
      const reduced = sum.reduce(bank, "CHF");

      expect(reduced.amount).toBe(10);
      expect(reduced.currency()).toBe("CHF");
   });

   it("Deve adicionar outra instância de Money a uma soma (método plus)", () => {
      const fiveDollars = new Money(5, "USD");
      const tenDollars = new Money(10, "USD");

      const sum = new Sum(fiveDollars, tenDollars);
      const sumWithThreeMore = sum.plus(new Money(3, "USD"));
      const reduced = sumWithThreeMore.reduce(bank, "CHF");

      expect(reduced.amount).toBe(12);
      expect(reduced.currency()).toBe("CHF");
   });

   it("Deve multiplicar a soma (método times)", () => {
      const fiveDollars = new Money(5, "USD");
      const tenDollars = new Money(10, "USD");

      const sum = new Sum(fiveDollars, tenDollars);
      const multipliedSum = sum.times(2);

      const reduced = multipliedSum.reduce(bank, "USD");
      expect(reduced.amount).toBe(30);
      expect(reduced.currency()).toBe("USD");
   });
});
