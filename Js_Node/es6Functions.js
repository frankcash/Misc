function me(myObject, ...Rest){
  console.log("rest",Rest);
}

me({"f":"f"}, 3, 4, 5);

let myArray = [1,2,3,4,5]

function you(first, ...rest){
  console.log("first", first);
  console.log("rest", rest);
}

you(...myArray);


const p1 = new Promise((resolve, reject) =>  {
  resolve(42);
});

p1.then(function(value){
  console.log(".then", value);
});

const sum =(...values) => values
  .reduce((s, v) => s + v);

console.log("sum", sum(1,2,3,4)); //=> 10
