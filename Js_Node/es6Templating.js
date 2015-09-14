let robotA = {name:"Jonny", age:3};
let robotB = {name:"Wall-e"}
let {name: nameB} = robotB; // nameB = robotB.name
let {name, age} = robotA; // name = robotA.name; age = robotA.age;

const myTemplate = `Hello,\n ${name}!`;

console.log(myTemplate);

const count = 62;
const price = 4.20;
const total = `${count} sandwiches will cost $${(price * count).toFixed(2)}`; //62 sandwiches will cost $260.40
console.log(total);
