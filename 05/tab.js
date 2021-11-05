// const tab = [1, 2, 3];
// const otherTab = [1, 2, 3];

// console.log(tab === otherTab); // false

// const tab = [1, 2, 3];
// const otherTab = tab;
// otherTab.push(4);

// console.log(tab); // [1, 2, 3, 4]
// console.log(otherTab); // [1, 2, 3, 4]

const tab = [1, 2, 3];
// Créer une copie de tab
// spread operator
const otherTab = [...tab];
otherTab.push(4);
console.log(tab);
console.log(otherTab);

const obj = {
  name: "Brice",
  age: 36,
};
const newObj = { ...obj };
