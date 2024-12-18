const Fibonacci = {
   fib: (n: number): number => {
      if (n === 0) return 0;
      if (n === 1) return 1;

      return Fibonacci.fib(n - 1) + Fibonacci.fib(n - 2);
   },
};

export default Fibonacci;
