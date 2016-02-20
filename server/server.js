var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// I had trouble using import syntax here:
var translateController = require('./translateController');

// There is probably a better name for this file - helpController?
var helpController = require('./help');

app.use(express.static(path.join(__dirname, './../')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res) {
  res.sendFile('/index.html');
});

app.post('/translate', function(req, res) {

	res.send({

		// I'm using bodyParser to parse req.body.
		es6code: translateController.translate(req.body.es5code),

		// Right now, I'm showing help text for all ES6 features we're translating. I'd love to figure out how to show help text for only the features that appear in the translated code.
		features: helpController.generateHelpText()
	});

})

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
