$(document).ready(function() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var unit = '&units=metric';
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + unit + '&appis=dc0161d9735a888cc70410708c8ed9de';
      
      
        $.getJSON(url, function(json) {

          var temperature = parseInt(json.main.temp);
          var location = json.name;
          var weather = json.weather[0].description;
          var icon_number = json.weather[0].icon;
          var icon = '<img src="http://openweathermap.org/img/w/' + icon_number + '.png"/>';
          $('.temperature_span').html(temperature);
          $('.location_span').html(location);
          $('.weather_span').html(weather);
          $('.icon').html(icon)
          
          var clicked = 0;
      $('.btn').on('click', function() {
        
        if (clicked == 0) {
          var new_temperature = parseInt(temperature * 1.8) + 32;
          $('.temperature_span').html(new_temperature);
          $('.unit').html('fahrenheit');
          
        clicked = 1;
        } else {
          $('.temperature_span').html(temperature);
          $('.unit').html('celcius');
          clicked = 0;
        }
      })
          
        });
      
      
      
      
    })
  }

})