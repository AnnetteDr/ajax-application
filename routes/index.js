//  Require Express and create a new instance of Router on it
const routes = require('express').Router();

// Import fs module
const fs = require('fs');

// Read JSON file and parse raw data
let rawdata = fs.readFileSync('data.json');
let result = JSON.parse(rawdata);

// Import body-parser module
const bodyParser = require('body-parser');
// Parse application/x-www-form-urlencoded
routes.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
routes.use(bodyParser.json());

routes.get('/', (req, res) => {
  res.render('index.ejs', { group: result, header: 'Group Lv-330.Node.js' });
});

routes.post('/', (req, res) => {
  result = [...result, {id: req.body.id, name: req.body.name, surname: req.body.surname}];  
  res.send(result);
});

routes.put('/', (req, res) => {
  result = result.map(function(item) {
    if (item.id == req.body.id) {
      item.name = req.body.newName;
      item.surname = req.body.newSurname;
    }
  return item;
 });
  res.send(result);
});

routes.delete('/', (req, res) => {
  result = result.filter(function(item) {
   return item.id != req.body.id;
  });
  
    res.send(result);
});

// routes.put('/', (req, res) => {
//   result = result.map(function(item) {
//     if (item.id == req.params.id) {
//       item.name = req.body.newName;
//       item.surname = req.body.newLastName;
//     }
//     return item;
//   });
//   res.send(result);
// });

module.exports = routes;