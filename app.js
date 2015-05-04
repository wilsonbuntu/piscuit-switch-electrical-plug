var express = require("express");
var app     = express();

var exec = require('child_process').exec;

//Store all HTML files in view folder.
app.use(express.static(__dirname + '/views'));
// Set public folder
app.use(express.static(__dirname + '/public'));


app.get('/interface',function(req,res){
	res.sendFile(__dirname + 	'/views/index.html');
  	//It will find and locate index.html from View or Scripts
});

app.get('/switch-on',function(req,res){
	console.log('switch-on');

	exec('sudo /home/pi/tools_installed/433Utils/RPi_utils/send 11111 3 1', {cwd: cwd, encoding: 'utf8'}, function(err, stdout) {
	        if (err) throw err;

	        console.log(stdout);
	});

});

app.get('/switch-off',function(req,res){
	console.log('switch-off');

	exec('sudo /home/pi/tools_installed/433Utils/RPi_utils/send 11111 3 0', {cwd: cwd, encoding: 'utf8'}, function(err, stdout) {
	        if (err) throw err;

	        console.log(stdout);
	});

});

// app.get('/about',function(req,res){
//   res.sendFile('/about.html');
// });

// app.get('/sitemap',function(req,res){
//   res.sendFile('/sitemap.html');
// });

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
}); 

app.listen(8003);

console.log("Running at Port 8003");