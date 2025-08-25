// Higher Order Function Example
function greet(name) {
  return function(message) {
    return `${message}, ${name}`;
  };
}

const greetAmit = greet("Amit");
console.log(greetAmit("Hello")); // Hello, Amit
