import Bank from "./Bank";
import Money, { Expression } from "./Money";

class Sum implements Expression {
   augend: Expression;
   addend: Expression;

   constructor(augend: Expression, addend: Expression) {
      this.augend = augend;
      this.addend = addend;
   }

   reduce(bank: Bank, to: string) {
      const amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
      return new Money(amount, to);
   }

   plus(addend: Expression): Expression {
      return new Sum(this, addend);
   }

   times(multiplier: number): Expression {
      return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
   }
}

export default Sum;
