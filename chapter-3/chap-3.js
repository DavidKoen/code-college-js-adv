const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

theList.shift();
theList.pop();
theList.unshift("FIRST");
theList[3] = "hello world";
theList.pop();
theList.pop();
theList.pop();
theList[2] = "MIDDLE";
theList.push("LAST");

console.log(theList);

console.log("\nCompany product catalog");

let inventory = [];

let item1 = {
  name: "tv",
  model: "4k Sony Bravio",
  cost: 19999.99,
  quantity: 4,
};
let item2 = { name: "piano", model: "Yamaha", cost: 9999.99, quantity: 10 };
let item3 = { name: "car", model: "Nissan", cost: 149999.99, quantity: 2 };

inventory.push(item1, item2, item3);

console.log(item3.quantity);