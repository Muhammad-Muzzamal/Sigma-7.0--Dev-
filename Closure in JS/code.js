// function createCounter() {
//     let count = 0;
//   function increment() {
//     count++;
//     return count;
//   }
//   return increment;
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let user = {
//   amount: 500,
//   save: function (amount) {
//     console.log(this);
//     this.amount += amount;
//   },
// };

// console.log(user.save(10));

/*

Closure Example Explained:
In this example, the function createCounter defines a variable count and a nested function increment. The increment function has access to the count variable even after createCounter has finished executing. Each time we call the counter function (which is actually the increment function), it increments and returns the updated count value. This demonstrates how closures allow inner functions to retain access to their outer function's scope, enabling data encapsulation and state management.

*/

// Use case of closures: Data Privacy

function createBankAccount() {
  let balance = 0;
  const user = {
    deposit: function (amount) {
      if (typeof amount === "number" && amount > 0) {
        balance += amount;
        return `Deposited: $${amount}. New Balance: $${balance}`;
      } else {
        return "Invalid deposit amount";
      }
    },
    withdraw: function (amount) {
      if (typeof amount === "number" && amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew: $${amount}. New Balance: $${balance}`;
      } else {
        return "Invalid withdrawal amount or insufficient funds";
      }
    },
    getBalance: function () {
      return `Current Balance: $${balance}`;
    },
  };
  return user;
}

let customer = createBankAccount();
console.log(customer.deposit(100)); // Deposited: $100. New Balance: $100
