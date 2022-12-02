// We must check that the number n that we are passing to the function is equal to or less than 1, if this is the case we have to return n as the result of the function.
// Otherwise, the function will call itself again, passing the calculation of n-1 and n-2 respectively as its argument, and later it will return the sum of both invocations as its result.

// 1. Recursion

// Algorithm
// We must check that the number n that we are passing to the function is equal to or less than 1, if this is the case we have to return n as the result of the function.
// Otherwise, the function will call itself again, passing the calculation of n-1 and n-2 respectively as its argument, and later it will return the sum of both invocations as its result.

// Complexity (Time Complexity)
// I will not go into detail about how to calculate the computational complexity, but I will leave you here what it is: 2^n, so we can see that the larger the number, the amount of computational resource increases enormously.

var fib = function(n) {
  if (n <= 1) return n;

  return fib(n-1) + fib(n-2);
}

// 2. Top-Down Dynamic Programming with memorization

// The first approach to dynamic programming that I want us to look at is top-down. The idea here is similar to the recursive approach, but the difference is that we will save the solutions to the subproblems that we find.
// That way, if we run into the same subproblem more than once, we can use our saved solution instead of having to recalculate it. This allows us to compute each subproblem exactly once.
// This dynamic programming technique is called memorization. We can see how our tree of subproblems is reduced when we use memorization:

// Algorithm
// We must check that the number n that we are passing to the function is equal to or less than 1, if this is the case we have to return n as the result of the function.
// Otherwise, we will check if the subproblem has already been solved before, if not, then we will proceed to carry out the same process that we use in recursion and save the result
// We will return the result that we have saved, either because it has been computed for the first time or because we have already computed it previously. 

// Complexity (Time Complexity)
// For this scenario the complexity will be O(n), a much lower complexity compared to recursion.

var fib = function(n) {
  const map = new Map(); // creamos un mapa para guardar los valores

  const dp = (x) => {
      if (x <= 1) return x;

      if (!map.has(x)) { // si NO hemos calculado el resultado
          map.set(x, dp(x-1) + dp(x-2)) // lo calculamos y guardamos el valor
      }

      return map.get(x);
  }

  return dp(n);
};

// 3. Dynamic Bottom-Up Programming

// In the Bottom-Up dynamic programming approach, what we are looking for is to solve the subproblems in a different order, that is, first we solve f(2), then f(3), then f(4), and so on until we reach f(n ). In this way we do not have to memorize anything, since we will only calculate those subproblems that are necessary.

// Algorithm

// We will have an array where we will store the values ​​of each subproblem, we will initialize it with the base results 0, 1.
// We will go from position 2 to n (including it) to add the solution of each subproblem.
// We will then return our array in the last position.

// Complexity (Time Complexity)
// In this case the computational complexity is still O(n).

var fib = function(n) {
  const sol = [0, 1];

  for (let i = 2; i<= n; i++) {
      sol[i] = sol[i -1] + sol[i - 2];
  }

  return sol[n];
};

