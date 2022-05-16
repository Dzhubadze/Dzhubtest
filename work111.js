//const myName = 'Timur'
//console.log(myName)
//const objectA = {
    //a: 10,
    //b: true
//}
//const copyOFA = objectA
//copyOFA.a = 20
//copyOFA.c = 'abc'
//const a = () => {
   // console.log('Hello there')
//}
//a()
//a = 10
//a()
/* const myCity = {
    city: 'New York',
    popular: true, */
    /* country: 'USA' */ 
//} 
//myCity.city = 'Almaty'
/* myCity.popular = true
myCity.country = 'USA' */

/* delete myCity.country */
/* myCity['country'] = 'USA' */
/* const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'
console.log(myCity) */
/* const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}
delete myCity.info.isPopular

console.log(myCity) */
/* const name = 'Timur';
const postsQty = 45;

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}
console.log(userProfile) */
/* const myCity = {
    city: 'New York',
    cityGreeting () {
        console.log('Greetings!!')
    }
}


myCity.cityGreeting() */
/* const myTest = {
    "userID": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}


JSON.stringify(myTest) */
/* const a = 10;
b = a;
b = 30;
console.log(a)
console.log(b) */
/* const person = {
    name: 'Bob',
    age: 25
}

const person2 = person;
person2.age = 35;
person2.isAdult = true;

/* person.age = 28;
person.isAdult = true; */

/* console.log(person.age)
console.log(person.isAdult) */



/* const person = {
    name: 'Bob',
    age: 25
} */

/* const person2 = Object.assign ({}, person);
person2.age = 26; */

/* const person2 = {...person};

person2.name = 'Alice'

console.log (person.name);
console.log (person2) */
/* const person2 = JSON.parse(JSON.stringify(person));
person2.name = 'Alice';

console.log(person.name)
console.log(person2.name) */
/* let a = 5;
let b = 3;
let c;

c = a + b;
console.log(c)

a = 8;
b = 12;
c = a + b;
console.log(c)  */


/* let a = 5;
let b = 3;
function sum(a, b) {
    const c = a + b
    console.log(c) 
}
sum(a, b)

a = 8;
b = 12;
sum(a, b) */
/* function myFun(a, b) {
    let c
    a = a * a
    c = a + b
    return c
}

console.log(myFun(3, 5))

function myFn() {}
myFn() */


/* 
const personOne = {
    name: 'Bob',
    age: 21
}

function incresePersonAge(person) {
    person.age += 1
    return person
}
incresePersonAge(personOne)
console.log(personOne)
 */

/* 
const personOne = {
    name: 'Bob',
    age: 21
}

function incresePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}
const updatedPersonOne = incresePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age) */



function printMyName() {
    console.log('Timur')
}

console.log('start')
setTimeout(printMyName, 10000)

const myCityAta = {
    city: 'Ata',
    country:'KZ'
}