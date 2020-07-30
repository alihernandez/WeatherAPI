var button = document.querySelector('button');
var inputValue = document.querySelector('.inputValue');




    $("button").on("click", function () {
    var queryURL= 'https://api.openweathermap.org/data/2.5/weather?q=denver&appid=5b45363e475837e210997c7e74afeacd'
   
   
    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {

        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var weatherDiv =$("<div>");
            var weather = results[i].weather;
            var p = $("<p>").text("Weather: " + weather);
            
            weatherDiv.append(p);
        }

      });
    

    //.catch(err => alert("Invalid City Name!"))









//$("#srchBtn").on("click", function () {
    //var forecast = $(this).attr("forecast");
    //var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=5b45363e475837e210997c7e74afeacd"};

    //$.ajax({
      //url: queryURL,
      //method: "GET",
    //}).then(function (response) {

        //console.log(response)
    //})};