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

This allows us to access what's inside the object in a simpler manner

``` javascript
console.log(name) // Lebron James
console.log(club) // LA Lakers
console.log(city) // Los Angeles
```
