//1 Làm việc với string
let str1 = 'My name is:'; 
let name = 'Dylan';

let str2 = `${str1} ${name}`



//2  Destructuring objects
var information = { firstName: 'Dylan', lastName: 'Israel'};

var { firstName, lastName } = information;
console.log(firstName); 
console.log(lastName); 

//3 Destructuring objects
var [ firstName ] = ['Dylan', 'Israel'];
console.log(firstName) 

//4 Object Literal
let firstName = 'Dylan';  
let information = { firstName };

let firstName = 'Dylan';  
let information = { firstName: firstName };

//5 Vòng lặp for… of
var str = 'hello';

for (let char of str) {  console.log(char);}

//6 Spread syntax
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];


function findLength(...args) {  console.log(args.length);}

findLength();  
findLength(1); 
findLength(2, 3, 4); 

//7 Arrow function
const square = num => num * num;
square(2);
//7 includes()
let str = 'Hello World';

console.log(str.includes('hello')); // true
//8 Class
class Car {
  constructor(wheels, doors) {
     this.wheels = wheels;
     this.doors = doors;
  }
  describeMe() {
    console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
  }}


const car1 = new Car(4, 2);  
car1.describeMe(); 

//9 Promise, async và await
function takeLongTimeAsync() {
  return new Promise(resolve => {
      setTimeout(() => resolve("long_time_value"), 1000);
  });
}

async function test() {
  const v = await takeLongTimeAsync();
  console.log(v);
}

test();