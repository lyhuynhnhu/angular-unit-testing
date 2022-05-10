const faker = require("faker");

const database = {
  users: [],
};

for (let i = 1; i <= 150; i++) {
  database.users.push({
    id: i,
    name: faker.name.findName(),
    role: faker.name.jobTitle(),
  });
}

console.log(JSON.stringify(database));
