class Pair {
   private from: string;
   private to: string;

   constructor(from: string, to: string) {
      this.from = from;
      this.to = to;
   }

   equals(object: Object) {
      const pair = object as Pair;
      return this.from === pair.from && this.to === pair.to;
   }

   hashCode() {
      return 0;
   }

   toString(): string {
      return `${this.from}-${this.to}`;
   }
}

export default Pair;
