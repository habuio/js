# Building a calculator

The assignment is to build a small calculator application. 

We will build it in a way that it's made up of smaller functions that together function as the calculator.

## Installation

Run the following command to install the project:

```
npm install
```

## Implementation

### Individual calculation functions

You must implement the following calculation functions:

* **sum**
* **subtract**
* **divide**
* **multiply**

They should take two parameters, for example:

```
let res = sum(1, 2) // 3
``` 

They should be possible to import into other modules:

```
// example.js
const sum = require('./sum');

let res = sum(1, 2) // 3
```

### Calculation higher-order function

You must implement a higher-order function that takes two values and a calculation function, and applies the calculation to the values.

It should work like this:

```
const sum = require('./sum');

let res = calculate(1, 2, sum); // 3
```

### Calculator class

And finally, you must implement the calculator class.

#### Instantiation

The calculator class should be possible to be instantiated into a new instance:

```
const calc = new Calculator();
```

You should be able to pass a starting point value to the constructor:

```
const calc = new Calculator(10); // It starts at 10
```

If you don't provide a starting point value in the constructor, it should set the starting point at 0:

```
const calc = new Calculator(); // It starts at 0
```

#### Performing calculations

You should implement methods for each of the calculations:

```
const calc = new Calculator(); // It starts at 0
calc.sum(10); // The value is now 10
```

It should retain the number in the object - if you call more calculation functions, it should work with the last value:

```
const calc = new Calculator(); // It starts at 0
calc.sum(10); // The value is now 10
calc.sum(100); // The value is now 110
calc.subtract(20); // The value is now 90
```

**Note: you should use the `calculate()` and calculation functions you created previously, such as `sum()` when implementing the calculator.**

#### Retrieving the value

At any point in time, you should be able to call a method to retrieve the current value after (or before) calculations:

```
const calc = new Calculator(); // It starts at 0
calc.sum(10); // The value is now 10
let res = calc.getValue(); // variable 'res' is now 10
```

The method should be called `getValue()`

#### Clearing the value

You should be able to call the method `clear()` to set the value inside of the calculator to 0:

```
const calc = new Calculator(); // It starts at 0
calc.sum(10); // The value is now 10
calc.clear(); // We clear the value - it's set to 0
let res = calc.getValue(); // variable 'res' is now 0
```

## Testing

To run the tests, you can run this command:

```
npm run test
```