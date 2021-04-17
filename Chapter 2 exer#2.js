// Closure (PART 1)
// The first part of this exercise is to use closure to implement a cache to remember the results of isPrime(..), so that the primality 
// (true or false) of a given number is only ever computed once. Hint: we already showed this sort of caching in Chapter 6 with factorial(..).

// If you look at factorize(..), it's implemented with recursion, meaning it calls itself repeatedly.
// That again means we may likely see a lot of wasted calls to compute prime factors for the same number. So the second part of the exercise is to use the same closure cache technique for factorize(..).

let isPrime = (function isPrime(v){
  let primes = {};

  return function findFPrime(v) {
      if (v in primes) {
          return primes[v];
      }
      if (v <= 3) {
          return (primes[v] = v > 1);
      }
      if (v % 2 == 0 || v % 3 == 0) {
          return (primes[v] = false);
      }
      let vSqrt = Math.sqrt(v);
      for (let i = 5; i <= vSqrt; i += 6) {
          if (v % i == 0 || v % (i + 2) == 0) {
              return (primes[v] = false);
          }
      }
      return (primes[v] = true);
  };
})();

let factorize = (function factorize(v){
  let factors = {};

  return function findFactorize(v) {
      if (v in factors) {
          return factors[v];
      }
      if (!isPrime(v)) {
          let i = Math.floor(Math.sqrt(v));
          while (v % i != 0) {
              i--;
          }
          return (factors[v] = [
              ...findFactorize(i),
              ...findFactorize(v / i)
          ]);
      }
      return (factors[v] = [v]);
  };
})();


console.log(isPrime(11));
console.log(isPrime(12));
console.log(factorize(11));
console.log(factorize(12));
