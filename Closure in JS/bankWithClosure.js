function createBankAccount() {
  let balance = 0;
  return {
    deposit: function (amount) {
      if (typeof amount === "number" && amount > 0) {
        balance += amount;
      }
    },
    withdraw: function (amount) {
      if (typeof amount === "number" && amount > 0 && amount <= balance) {
        balance -= amount;
      }
    },
    getBalance : function () {
        return balance;
    }
  };
}

console.log(createBankAccount().getBalance())
