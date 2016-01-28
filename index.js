var express = require('express');
var app = express();
var bodyParser = require('body-parser')


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.post('/bmi',urlencodedParser, function(req,res){
	feet = parseInt(req.body.feet);
	inches = parseInt(req.body.inches);
	lbs = parseInt(req.body.lbs);
	var height = feet*12 + inches;
	bmi = (lbs*703)/(Math.pow(height,2));
	bmir = bmi;
	var status="You are ";
	if(bmir<18.5)
		status = status + 'under-weight';
	else if(bmir>= 18.5 & bmir <=24.9)
		status = status + 'normal-weight';
	else if(bmir>= 25 & bmir <=29.9)
		status = status + 'over-weight';
	else if(bmir>= 30)
		status = status + 'obese';
	res.send("Your height: "+ height+ "<br>" +
				"Your weight: " + lbs+ "<br>"+
				 "Your BMI: "+ bmir+ "<br>" + "You are: " + "<b>"+ status+ "<b>");

});



app.get('/', function(request,response){
response.render('default');
});

var server = app.listen(3000, function(){
console.log('Listening on port 3000');
});



