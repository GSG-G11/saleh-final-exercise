/*
 * Exercise: Fill in the functions
 *
 * This exercise is a collection of empty functions; fill them in in order to
 * make the tests pass.
 *
 * When you think you have finished, run the command:
 *   npm run s1.closures
 * This will run a series of tests which should all pass.
 */
'use strict';


var inc = 1;

/*
 * This function should increase the value passed in as an argument by the
 * increment defined by the `inc` variable. For example:
 *
 * increment(2); // returns 3
 */
function increment(n) {
  // fill in ...
  return inc + n;
}


/*
 * This function should return a function that increments its argument by
 * whatever number is given as an argument. For example:
 *
 * var incBy3 = createIncrementer(3);
 * var incBy2 = createIncrementer(2);
 * incBy3(2); // returns 5
 * incBy2(2); // returns 4
 */
function createIncrementer(base) {
  // fill in ...
  function incBy(n) {
    return base + n;
  }
  return incBy
}


/*
 * This function should return an object that represents a counter and contains
 * three methods: `inc`, which increments the counter by 1, `dec` which
 * decrements the counter by 1, and `read`, which returns the current value of
 * the counter. For example:
 *
 * var counter = createCounter();
 * counter.read() // returns 0
 * counter.inc()
 * counter.read() // returns 1
 * counter.dec()
 * counter.read() // returns 0
 */
function createCounter() {
  // fill in ...
  let counter = 0;
  let inc = () => {
    return counter++;
  }
  let dec = () => {
    return counter--;
  }
  let read = () => {
    let count = counter;
    return count;
  }
  return {
    read, inc, dec
  }
}


module.exports = {
  increment,
  createIncrementer,
  createCounter,
};
