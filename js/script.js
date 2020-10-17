// constants and variables
const API_KEY = CONFIG.openWeatherAPIKey;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

let weatherData, userInput;

// Cached element references
const $title = $('#title');
const $temp = $('#temp');
const $index = $('#index');
const $desc = $('#desc');
const $high = $('#high');
const $low = $('#low');
const $icon = $('#w-icon');
const $form = $('form');
const $input = $('input[type="text"]');
//const $dropdown = $('#myDropdown');

// Event listeners
$form.on('submit', handleGetData)


// Functions


function handleGetData (event) {
    event.preventDefault();

    userInput = $input.val();

    if(!userInput) return;

    $.ajax(BASE_URL + `q=${userInput}&units=metric&appid=` + API_KEY)
    .then(function(data) {
        
        weatherData = data;
        console.log(weatherData)
        console.log(weatherData.weather[0].icon)
        
        render();

    }, function(error){
        console.log('Error: ', error);
    });
};

function handleGetDays() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

function render() {
    $title.text(weatherData.name +'\'s current temperature is:');
    $temp.text(weatherData.main.temp +'\u00B0C');
    $index.text('It feels like '+ weatherData.main.feels_like+'\u00B0C') ;
    $desc.text('You can expect '+ weatherData.weather[0].description+ ' today');
    $high.text('Today\'s high will be '+ weatherData.main.temp_max+'\u00B0C');
    $low.text('Today\'s low will be ' + weatherData.main.temp_min+'\u00B0C' );

    var iconcode = weatherData.weather[0].icon;
    $icon.attr('src', "http://openweathermap.org/img/w/" + iconcode + ".png");
    
}





//weather url ,<script src="http://openweathermap.org/img/wn/10d@2x.png"></script> code is 02d




