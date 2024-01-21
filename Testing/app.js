const users = [
  { name: "Parth", age: 25, id: 1 },
  { name: "Arth", age: 18, id: 2 },
  { name: "Jiyan", age: 2, id: 3 },
  { name: "Mahesh", age: 62, id: 4 },
];

const sortByAge = () => {
  return;
  return users.sort((a, b) => a.age - b.age);
};
console.log(sortByAge());

module.exports = sortByAge;
