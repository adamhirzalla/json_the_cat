const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body)=>{
    if (err) callback(err, null);
    if (body === '[]') return callback('Breed Not Found', null);
    try {
      callback(null, JSON.parse(body)[0].description);
    } catch (e) {
      callback(body, null);
    }
  });
};

module.exports = {
  fetchBreedDescription,
};