function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
}
var goodUsers = [{ id: 1 },{ id: 2 },{ id: 3 }]
var testAllValid = checkUsersValid(goodUsers);

console.log(testAllValid([{ id: 2 }, { id: 1 }]))

console.log(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]))