import Bank from "./Bank";
import Sum from "./Sum";

export interface Expression {
   reduce: (bank: Bank, to: string) => Money;
   plus: (addend: Expression) => Expression | null;
   times: (multiplier: number) => Expression;
}

class Money implements Expression {
   public amount: number = 0;
   protected _currency: string | null = "";

   constructor(amount: number, currency: string | null) {
      this.amount = amount;
      this._currency = currency;
   }

   equals(object: object): boolean {
      const money = object as Money;
      return this.amount === money.amount && money._currency === this._currency;
   }

   times(multiplier: number): Expression {
      return new Money(this.amount * multiplier, this._currency);
   }

   currency() {
      return this._currency;
   }

   toString() {
      return `${this.amount} ${this._currency}`;
   }

   static dollar(amount: number): Money {
      return new Money(amount, "USD");
   }

   static franc(amount: number): Money {
      return new Money(amount, "CHF");
   }

   plus(addend: Expression): Expression {
      return new Sum(this, addend);
   }

   reduce(bank: Bank, to: string) {
      const rate = bank.rate(this._currency!, to);
      return new Money(this.amount / rate, to);
   }
}

export default Money;
