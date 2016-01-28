var express = require('express');
var app = express();
var bodyParser = require('body-parser')


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.post('/bmi',urlencodedParser, function(req,res){
	feet = parseInt(req.body.feet);
	inches = parseInt(req.body.inches);
	lbs = parseInt(req.body.lbs);
	var height = feet*12 + inches;
	bmi = (lbs*703)/(Math.pow(height,2));
	bmir = bmi.toFixed(2);
	var status="";
	if(bmi<18.5)
		status = status + 'under-weight';
	else if(bmi>= 18.5 & bmir <=24.9)
		status = status + 'normal-weight';
	else if(bmi>= 25 & bmir <=29.9)
		status = status + 'over-weight';
	else if(bmi>= 30)
		status = status + 'obese';
	comment = "Your BMI: "+ bmir + "       " + "You are: " + status;
	res.render("default",{title: comment});
});



app.get('/', function(request,response){
response.render('default', {title:'You result goes here'});
});

var server = app.listen(8080, function(){
console.log('Listening on port 3000');
});



