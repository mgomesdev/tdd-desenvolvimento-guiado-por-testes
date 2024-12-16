import Money, { Expression } from "./Money";
import Pair from "./Pair";

class Bank {
   private rates: Map<string, number> = new Map();

   constructor() {}

   reduce(source: Expression, to: string): Money {
      return source.reduce(this, to);
   }

   addRate(from: string, to: string, rate: number): void {
      const pair = new Pair(from, to);
      this.rates.set(pair.toString(), rate);
   }

   rate(from: string, to: string): number {
      const pair = new Pair(from, to);
      const rate = this.rates.get(pair.toString());

      if (from === to) return 1;

      return rate!;
   }
}

export default Bank;
