var apiKey = "fb313518c0942fc6ebfb63bd3ee11070";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey) .then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })
    .fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});