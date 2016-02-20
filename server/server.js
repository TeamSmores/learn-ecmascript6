var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// I had trouble using import syntax here:
var fakeTranslate = require('./translateController');

app.use(express.static(path.join(__dirname, './../')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res) {
  res.sendFile('/index.html');
});

app.post('/translate', function(req, res) {
	// I've console logged to confirm that req.body.es5code is the code we want to translate and that I can translate it with the fakeTranslate function.
	// console.log('es5code: ', req.body.es5code);
	// console.log('fake translation: ', fakeTranslate(req.body.es5code));
	// console.log('req:', req); // The body is now empty - weird. Do I need bodyParser?

	// I want to send the translation of req.body.es5code:
	res.send(fakeTranslate(req.body.es5code));

	// I've confirmed that this function is running.
	// console.log('app.post is running')
	
	// res.redirect('/');
	// Now setState

	// console.log('Will this show up? I want to know if I can do anything after res.redirect.') // Answer: yes.
	// res.end(); // takes user to a blank page
	// Do I need middleware?
	// Can the last function be updating state?
})

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
