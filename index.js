fetch('https://jsonplaceholder.typicode.com/comments/1')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
  })

  fetch('https://jsonplaceholder.typicode.com/comments', {
  method: "POST",
  body: JSON.stringify({
    postID: 1,
    name: 'Dylan',
    email: 'dylanblahblah2022@gmail.com',
    body: 'Cool!'
  })
})
  .then(response => response.json())
  .then((data) => {
    console.log(data)
  })
