const express = require('express');
const app = express();
const pets = require('./data.js');

const indexOfPet = (key, value) => {
  let output = [];
  for (let i=0; i<pets.length; i++) {
    if (pets[i][key].toLowerCase() === value) {
      output.push(pets[i]);
    }
  }
  return output;
}

app.get('/pets', (req, res) => {
  res.send(pets);
});

app.get('/pets/:name', (req, res) => {
  const petName = req.params.name;
  res.send(indexOfPet('name', petName));
})

app.get('/pets-owner', (req, res) => {
  const ownerName = req.query.owner;
  res.send(indexOfPet('owner', ownerName));
});

app.listen(8080);