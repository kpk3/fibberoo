/**
 * Created by junoa on 9/20/2016.
 */

/**
 * Fib
 *
 * @param input
 * @returns {Array}
 */

function fib(input) {
  let i = 0;
  x = 0;
  y = 1;
  let data = [];
  data.push(x);
  data.push(y);
  for (i = 0; i < input - 2; i++) {
    data.push(x+y);
    z = x + y;
    x = y;
    y = z;
  }
  return data;
}

console.log(fib(100));