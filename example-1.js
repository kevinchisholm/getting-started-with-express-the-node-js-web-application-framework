var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var HTML = ''
	+ '<!DOCTYPE html>'
	+ '<html>'
		+ '<head>'
			+ '<meta charset=utf-8>'
			+ '<title>Example Web Page</title>'
		+ '</head>'
		+ '<body>'
			+ '<h1>It works!</h1>'
		+ '</body>'
	+ '</html>';

  res.send(HTML);
});

app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});