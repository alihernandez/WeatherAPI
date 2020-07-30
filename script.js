
var inputValue = document.querySelector('.inputValue');
//http://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=5b45363e475837e210997c7e74afeacd



    $("button").on("click", function () {
    event.preventDefault();
    var queryURL= 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5b45363e475837e210997c7e74afeacd';
    console.log("send it");
    console.log(inputValue)
   
    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {

        //console.log(response);
        var results = response.weather;
        //console.log(results);
        

        for (var i = 0; i < results.length; i++) {
            var weatherDiv = $("<div>");
            
            console.log(results.length);
            var forecast = results[i].description;
            console.log(results[i])
            console.log(forecast)
            //displays current weather
            var p = $("<p>").text("Current Weather: " + forecast);
            var li = $("<li>").text(inputValue.value);

            weatherDiv.append(p);
            
            //where data appears on page
            $("#forecast").prepend(weatherDiv);
            $("#history").append(li);

        }

    })});
    

    //.catch(err => alert("Invalid City Name!"))









//$("#srchBtn").on("click", function () {
    //var forecast = $(this).attr("forecast");
    //var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=5b45363e475837e210997c7e74afeacd"};

    //$.ajax({
      //url: queryURL,
      //method: "GET",
    //}).then(function (response) {

        //console.log(response)
    //})}