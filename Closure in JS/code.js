function createCounter() {
  function increment() {
    console.log("I am Increment Function");
  }
  return increment;
}

const count = createCounter();
count();
