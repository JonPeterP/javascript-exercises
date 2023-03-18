const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(theArgs) {
	var sum = theArgs.reduce( (a,b) => a + b, 0);
  

  return parseInt(sum);
};

const multiply = function(args) {
  var product = 1;
  args.forEach(arg => {
    product *= arg;
  });
  return product;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  if(a != 0) return a * (factorial(a-1));
  else return 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
