$(document).ready(function() {
  var tempC;
  var tempF;
  var celsius;

  $.ajax({
        type: "GET",
        url: 'https://api.wunderground.com/api/c50c16deb2f1c9af/conditions/q/VA/Norfolk.json'
      }).done(function(json) {
        

        tempF = json.current_observation.temp_f + " &deg;F";
        tempC = json.current_observation.temp_c + " &deg;C";
        $("#data").html(tempF);
        celsius = false;

        $("#icon").attr("src",json.current_observation.icon_url);
        $("#wu").attr("src",json.current_observation.image.url);
      });
  
  $("#deg").click(function() {
    if(!celsius) {
      $("#data").toggle("slow",function() {
        $("#data").html(tempC);
        celsius = true;
        $("#data").toggle("slow");
        });
    }
    else {
      $("#data").toggle("slow",function() {
        $("#data").html(tempF);
        celsius = false;
        $("#data").toggle("slow");
        });
    }
  });
  
});