export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      // .then(data => console.log(data))
}
// GET Requests:
// fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(err => /* do something else */);

// fetch('some_url')
//  .then(res => res.json())
//  .then(data => {
//    console.log(data);
//   /* do something with data */
// })

// POST Requests:
// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(someDataToSend), // remember how HTTP can only send and receive strings, just like localStorage?
//   headers: {
//   	'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(json => /*do something with json*/)
//   .catch(err => /*do something with the error*/);

// function getTrivia(number, categoryId) {
//   const root = 'https://opentdb.com/api.php';
//   const url = `${root}?amount=${number}&category=${categoryId}&type=multiple`;
//   const promise = fetch(url)
//                   .then(response => response.json());

//   return promise;
// }

// getTrivia(10, 27)
//   .then(data => console.log(data))
//   .catch(err => /* do something else */);