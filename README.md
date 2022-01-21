# JavaScript ES6

### Destructing Objects

Break down object in the following manner:

``` javascript
const player = {
  name: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};
```
How would you normally grab the name of the player? What about the city?

``` javascript
console.log(player.name)
console.log(player.address.city)
```

It's a long syntax 😅
So Instead:

``` javascript
const { name, club, address: {city} } = player;
// This is exactly the same as
// player.name
// player.club
// player.address.city
```

This allows us to access the object key's values in a simpler manner

``` javascript
console.log(name) // Lebron James
console.log(club) // LA Lakers
console.log(city) // Los Angeles
```
<hr>

### Destructuring Arrays

``` javascript
let names = ['Dylan', 'Coding God', 'Israel'];
console.log(names[0]) // Dylan
```

We can destructure the array like this:

``` javascript
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];
console.log(firstName) // Dylan

// We can override values
firstName = 'Bob'
console.log(firstName) // Bob
```
<hr>

### Object Literals

``` javascript
function addressMaker(city, state) {
  const newAddress = {city: city, state: state}

  console.log(newAddress)
}

addressMaker('Austin', 'Texas')
// {city: "Austin", state: "Texas"}
```

If the keys are the same as the values being passed we don't have to set them.
With object literals:

``` javascript
function addressMaker(city, state) {
  const newAddress = {city, state}

  console.log(newAddress)
}

addressMaker('Austin', 'Texas')
// {city: "Austin", state: "Texas"}
```

Object Literals prevents us from writing duplicate code. Less code but still descriptive.

<hr>

### For of Loop

Can be used to iterate over iterables.

``` javascript
let incomes = [62000, 67000, 75000]
let total = 0

for (const income of incomes) {
  total += income
}

console.log(total) // 204000
```

``` javascript
let name = "Dylan"

for (const char of name) {
  console.log(char)
}

// D
// y
// l
// a
// n
```
<hr>

### Spread Operator

``` javascript
let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = contacts; // copy of contacts

console.log(personalFriends)
// ["Mary", "Joel", "Danny"]

contacts.push("John")
console.log(contacts)
// ["Mary", "Joel", "Danny", "John"]

console.log(personalFriends)
// ["Mary", "Joel", "Danny", "John"]
```

Why is `John` inside of my `personalFriends`?

Because `personalFriends` acts as an reference type. In other words
`let personalFriends = contacts` does not create a new array. Instead it's making a reference to `contacts`. So the changes we make in `contacts` will also affect `personalFriends`.

Then how can we solve this?

-> Spread Operators!

``` javascript
let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = [ ...contacts ];
// spread operator followed by the name of the array we want to copy

contacts.push("John")
console.log(personalFriends)
// ["Mary", "Joel", "Danny"]
```
We can also do the following by using spread operators:

``` javascript
let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = [ "David", ...contacts, "Lily" ];

console.log(personalFriends)
// ["David", "Mary", "Joel", "Danny", "Lily"]
```

Spread operatos can also be used with objects.

``` javascript
let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee)
// {name: "Adam", age: 25, city: "Manchester", salary: 50000, position: "Software Developer"}
```
<hr>

### Rest Operator

Used when we don't know how many inputs there will be.

``` javascript
function add(nums) {
  console.log(nums)
}

add(4, 5, 7, 8, 12)
// 4

// using arguments
function add(nums) {
  console.log(arguments)
}

add(4, 5, 7, 8, 12)
// {0: 4, 1: 5, 2: 7, 3: 8, 4: 12}
```

Instead of arguments we can use the rest operator which looks liks the spread operator.

``` javascript
function add(...nums) {
  console.log(nums)
}

add(4, 5, 7, 8, 12)
// [ 4, 5, 7, 8, 12 ]
```
<hr>

### Arrow Functions

``` javascript
// function declaration
function breakfastMenu() {
  return "eggs and bacon"
}

// anonymous function
const lunchMenu = function() {
  return "burger and fries"
}

//arrow function
const dinnerMenu = (food) => {
  return `For dinner I will have ${food}`
}

console.log( dinnerMenu("grilled steak") )
// For dinner I will have grilled steak
```

With arrow functions, if it only has one paramater and one thing to return:
we can ommit the return and the parenthesis around the parameter.

``` javascript
const dinnerMenu = food => `For dinner I will have ${food}`
```
<hr>

### Default Params

``` javascript
const leadSinger = (artist) => {
  console.log( `${artist} is the lead singer of Cold Play`)
}

// What happens when you don't provide arguments?
leadSinger()
// undefined is the lead singer of Cold Play
```

To prevent this we can use default parameters.

``` javascript
const leadSinger = (artist = "someone") => {
  console.log( `${artist} is the lead singer of Cold Play`)
}

leadSinger()
// someone is the lead singer of Cold Play

// What if we DO provide arguments?
leadSinger("Chris Martin")
// Chris Martin is the lead singer of Cold Play
```
<hr>

### Includes()

returns true or false

``` javascript
let numArray = [1,2,3,4,5]

console.log(numArray.includes(2))
// true

// without includes
console.log(numArray.indexOf(0))
// -1
```
<hr>

### Import and Export

``` javascript
// example.js
export const data = [1,2,3];

// index.js
import { data } from './example.js'
console.log(data)
// [1,2,3]
```
<hr>

### padStart() and padEnd()

Adding values to the start and end of the string.

``` javascript
let example = "Dylan";

console.log(example.padStart(10, 'a'))
// aaaaaDylan
console.log(example.padEnd(10, 'a'))
// Dylanaaaaa
console.log(example.padStart(100))
// Dylan
console.log(example.padStart(100).length)
// 100
console.log(example.padEnd(1))
// Dylan

let example = "Dylan Israel"

console.log(example.padStart(10, 'a'))
// Dylan Israel
```
<hr>

### Classes

``` javascript
// animals.js
export class Animal {
  constructor(type, legs){ // constructor assigns values to the animal class
    this.type = type;
    this.legs = legs;
  }

  // we can create functions inside of classes
  makeNoise(sound = 'Loud Noise') {
    console.log(sound)
  }

  get metaData(){
    return `Type: ${this.type}, Legs: ${this.legs}`
  }

  static return10(){
    return 10;
  }
}

// inheriting
export class Cat extends Animal {
  constructor(type, legs, tail) {
    super(type, legs);
    this.tail = tail;
  }

  makeNoise( sound = "meow") {
    console.log(sound)
  }
}

// index.js
import { Animal } from './animals.js'

console.log(Animal.return10()) // 10

let cat = new Animal('Cat', 4);

console.log(cat.type) // Cat
console.log(cat.legs) // 4
cat.makeNoise('Meow') // Meow
console.log(cat.metaData) // Type: Cat, Legs: 4

cat.legs = 3;

console.log(cat.legs) // 3

let cat = new Cat('cat', 4)
cat.makeNoise() // meow
console.log(cat.metaData) // Type: Cat, Legs: 4
```
<hr>

### Promises

Used on network requests such as fetching from API or asynchronous functions. Prevents callback hell.

``` javascript
const buyFlightTicket = () => {
  return new Promise( (resolved, reject) => {
    setTimeout( () => {
      const error = false;

      if(error) {
          reject("Sorry your payment was not successful")
        } else {
          resolve("Thank you, your payment was successful")
        }
      }
    }, 3000)
  })
}

buyFlightTicket()
.then( (success) => console.log(success)) // only runs when resolve
// success -> "Thank you, your payment was successful"
.catch( (error) => console.log(error)); // only runs when reject
// error -> "Sorry your payment was not successful"

// after 3 seconds => Thank you, your payment was successful
```
<hr>

###
``` javascript

```
``` javascript

```
``` javascript

```
``` javascript

```
``` javascript

```
``` javascript

```
``` javascript

```
