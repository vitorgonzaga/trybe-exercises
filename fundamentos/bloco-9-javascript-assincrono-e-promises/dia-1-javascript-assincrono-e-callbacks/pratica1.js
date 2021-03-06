const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };

  const {firstName, lastName, nationality} = userToReturn

  const output = callback({ firstName , lastName, nationality });
  return output;
};

getUser(userFullName);

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser

getUser(userNationality);

assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser