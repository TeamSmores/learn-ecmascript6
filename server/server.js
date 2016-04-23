/* eslint-disable no-console */

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const translateController = require('./translateController');
const helpController = require('./help');

app.use(express.static(path.join(__dirname, './../')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

// Route for when a user clicks the 'translate' button.
app.post('/translate', (req, res) => {
  // Attempt to translate the user's code.
  const translationResult = translateController.translate(req.body.es5code);

  // If translation succeeds, send the translationResult, along with an object holding help text
  // about ES6 features.
  if (translationResult) {
    res.send({
      es6code: translationResult,
      features: helpController.helpText,
    });

  // If translation fails, send an error message, along with an empty object (so that no help text
  // about ES6 features will be displayed).
  } else {
    res.send({
      es6code: 'Uh-oh! Esprima was unable to parse your ES5.\n\nPlease check your code for errors.',
      features: [],
    });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;
