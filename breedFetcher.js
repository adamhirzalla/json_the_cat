const request = require('request');
const arg = process.argv.slice(2,3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (err, response, body)=>{
  if (err) return console.log('Something went wrong');
  if (body === '[]') return console.log('Breed Not Found');
  try {
    console.log(JSON.parse(body)[0].description);
  } catch (error) {
    console.log(body);
  }
});