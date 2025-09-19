const { faker } = require("@faker-js/faker");



let createRandomUser = () => {
  return {
    id: faker.string.uuid(),
    name: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

console.log(createRandomUser());
