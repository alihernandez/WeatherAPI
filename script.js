//http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}


$("#srchBtn").on("click", function () {
    var forecast = $(this).attr("data-animal");
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={5b45363e475837e210997c7e74afeacd"};

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {

        console.log(response)
    })};