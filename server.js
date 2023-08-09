const express = require('express');
const app = express();
const pets = require('./data.js');

const indexOfPet = (key, value) => {
  let i = 0;
  while (i < pets.length) {
    if (pets[i][key].toLowerCase() === value) {
      return pets[i];
    }
    i ++;
  }
}

app.get('/pets', (req, res) => {
  // let html = '<ul>';
  // pets.map((pet) => {
  //   html += `<li>Name: ${pet.name} Breed: ${pet.breed} Age: ${pet.age} Owner: ${pet.owner}</li>`;
  // });
  // html += '</ul>';
  // res.send(html);
  res.send(pets);
});

app.get('/pets/:name', (req, res) => {
  const petName = req.params.name;
  console.log(petName);
  res.send(indexOfPet('name', petName));
})

app.get('/pets-owner', (req, res) => {
  const ownerName = req.query.owner;
  console.log(`OWNER: ${ownerName}`);
  res.send(indexOfPet('owner', ownerName));
});

app.listen(8080);