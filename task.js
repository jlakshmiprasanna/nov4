// Question-1
function limit(num,min,max){
    let limitmax = Math.min(num,max);
    let limitmin = Math.max(limitmax,min);
    return limitmin;
}
console.log(limit(5,1,10));
console.log(limit(0,1,10));
console.log(limit(15,1,10));

//  Question-2
const range = Math.floor(Math.random() * 5) + 5;
console.log(range);


//  Question-3
let number = 5.1;
let result = (number === Math.floor(number)) ? number : Math.ceil(number);
console.log(result);


// Question-4
const arr = [10, 20, 30, 40];
const [a, b] = arr;
console.log(a); 
console.log(b); 


// Question-5
const object={
    name: "Alice",
    age: 25,
    city: "New York"
}
const{name,age}=object
console.log(name)
console.log(age)


// Question-6
const object1={ person: { name: "Eve", address: { city: "Paris" } } }
console.log(object1.person.address.city)


// Question-7
let arr1=[1,2,3]
let arr2=[4,5,6]
let combineArr=[...arr1,...arr2]
console.log(combineArr)


// Question-8
function sum(...numbers) {
    return numbers.reduce((acc,num)=> acc+num,0);
}
console.log(sum(1,56,43,89))
console.log(sum(2,66,48,82))


// Question-9
const object2={ name: "John", age: 30 }
const newObj= {...object2,city:"U.S"}
console.log(newObj)