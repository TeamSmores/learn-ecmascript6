var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// ID: I had trouble using import syntax here:
var translateController = require('./translateController');

// There is probably a better name for this file - helpController?
var helpController = require('./help');

app.use(express.static(path.join(__dirname, './../')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res) {
  res.sendFile('/index.html');
});

// Route for when a user clicks the 'translate' button.
app.post('/translate', function(req, res) {

	// ID: I'm using bodyParser to parse req.body.
	var translationResult = translateController.translate(req.body.es5code);

	// If translation succeeds, send the translationResult, along with an object holding help text about ES6 features.
	if (translationResult) {

			res.send({
				es6code: translationResult,

				// ID: Right now, I'm showing help text for all ES6 features included in our app. I'd love to figure out how to show help text for only the features that appear in the translated code.
				features: helpController.helpText
			});

	// If translation fails, send an error message, along with an empty object (so that no help text about ES6 features will be displayed).
	} else {

		res.send({
			es6code: 'Uh-oh! Esprima was unable to parse your ES5.\n\nPlease check your code for errors.',
			features: []
		})
	}

})

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
