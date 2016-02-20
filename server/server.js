var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// I had trouble using import syntax here:
var fakeTranslate = require('./translateController');

// There is probably a better name for this file - helpController?
var generateHelpText = require('./help');

app.use(express.static(path.join(__dirname, './../')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res) {
  res.sendFile('/index.html');
});

app.post('/translate', function(req, res) {

	res.send({

		// Need to switch from the fake function to the real one :)
		es6code: fakeTranslate(req.body.es5code),

		// I've hard-coded the name of the feature that we've translated and would like to show help text about. Eventually, I'd like to figure out how to (1) update the feature name dynamically and (2) show help text for multiple features (one div per feature). Perhaps I could do that by making generateHelpText an array?
		feature: generateHelpText('for... of statement')
	});

})

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
