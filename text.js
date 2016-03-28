$(document).ready(function() {
    console.log( "ready!" );
});

var city = cityname

function switchBackground(){
    if(cityname === 'nyc'){
    $('body').addClass('nyc');
    cityname = 'nyc';
  } 
}
  $('a').click(function(event){
    event.preventDefault();
});

$('#cityname').click(switchBackground);



/* #1 
on CLICK of the input bar, changes to NYC. only added 
"var = nyc" to try and get this to work. :( 
)
function switchBackground(){
    if(city === 'nyc'){
    $('body').addClass('nyc');
    city = 'nyc';
  } 
}
  $('a').click(function(event){
    event.preventDefault();
});

$('#cityname').click(switchBackground);

==================================================

/* #2
just trying to see if I can NYC to show up after 
click SUBMIT


var city= 'nyc';

function switchBackground(){
    if(city === 'nyc'){
    $('body').attr('container', 'nyc');
    city = 'nyc';
  } else {
    $('body').removeClass();
    } 
}
  $('a').click(function(event){
    event.preventDefault();
});

$('#cityname').click(switchBackground);

*/


