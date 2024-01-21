const sortByAge = require("./app");

test("Testing Sorting to get first element Jiyan", () => {
  const sortedUserByAge = sortByAge();
  expect(sortedUserByAge[0].name).toBe("Jiyan");
});

test("Testing Sorting Container to not get undefined", () => {
  const sortedUserByAge = sortByAge();
  expect(sortedUserByAge).not.toBeUndefined();
});
