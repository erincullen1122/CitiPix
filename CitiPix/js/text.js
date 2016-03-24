/* Project: Citipix*/

$( document ).ready(function() {
    console.log( "ready!" );
});

/*The element that will change based on user input =
City Image based on City Name*/

var city-name = ("text"); /*Q: RIGHT VALUE?I also 
tried 0 and just cityname..and also using CorrectCityImage as the var/

/*The object we want to display/show is the Correct City Image when 
users enters the City Name - I changed to City Name as to me
this makes more sense*/

function showCorrectImage(correctImage) { 
var correctcityImage = city-name;
return correctcityImage;
}

$('#city-name').submit(function (event) {
$('#submit-btn').val(""); /*Q: I DONT THINK this is the right 
ID, but have tried #city-name, no go....*/

   if(city-name === NYC)
   {
   	//change bg to NYC
   	$('body').removeClass();
   	$('body').addClass('nyc');
   }
   else if(city-name === SF)
   {
   	//change bg to SF
   	$('body').removeClass();
   	$('body').addClass('sf');
   }
   else(city-name === SYDNEY)
   {
   	//change bg to SYDNEY
   	$('body').removeClass();
   	$('body').addClass('sydney');
   }
 });

