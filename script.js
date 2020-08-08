var inputValue = document.querySelector(".inputValue");
var cities = [];
//http://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=5b45363e475837e210997c7e74afeacd

$(document).ready(function () {
  $("button").on("click", function () {
    event.preventDefault();
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&units=imperial&appid=5b45363e475837e210997c7e74afeacd";
    var city = $("#city").val();
    $('#name').append(city);
    //$("#name").empty();
    //var name =$("<h3>").addClass("#name").text(inputValue.value).html(<a href="http://www.google.com"></a>); 
    //var link =$("<h3>").html("<a href=htt")
    //$("#name, #history").append(name, link);
    console.log(inputValue.value);

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
        //clears forecast ID
      $("#forecast").empty();
      var current = $("<p>")
        .addClass("forecast")
        .text("Current forecast: " + response.weather[0].description );
      var tempL = $("<p>")
        .addClass("forecast")
        .text("The low today is: " + response.main.temp_min + "F");
      var tempH = $("<p>")
        .addClass("forecast")
        .text("The high today is: " + response.main.temp_max + "F");
      var iconurl =
        "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
      var img = $("<img>").attr("src", iconurl);
      var h2 = $("<h2>").text(moment(response.dt, "X").format("MM/DD/YYYY"));
      var humid = $("<p>")
        .addClass("forecast")
        .text("Humidity: " + response.main.humidity + "%");
      
    //ajax call for UV index
      $.ajax({
        url:
          "http://api.openweathermap.org/data/2.5/uvi?appid=5b45363e475837e210997c7e74afeacd&lat=" +
          response.coord.lat +
          "&lon=" +
          response.coord.lat,
        method: "GET",
      }).then(function (response2) {
        $(".card-group").empty();
        var uv = $("<p>")
          .addClass("forecast")
          .text("UV index " + response2.value);
        console.log(response2);
        //appends everything to the forcast ID
        $("#forecast").append(h2, current, img, tempH, tempL, humid, uv);

        //ajax call for five day forcast
        $.ajax({
          url:
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
            inputValue.value +
            "&appid=5b45363e475837e210997c7e74afeacd&units=imperial",
          method: "GET",
        }).then(function (response3) {
          console.log(response3);
          var fiveDay = response3.list;
          for (let index = 0; index < fiveDay.length; index++) {
            if (fiveDay[index].dt_txt.includes("00:00:00")) {
              //     <div class="card">

              //     <div class="card-body">
              //       <h5 class="card-title"></h5>
              //       <p class="card-text"></p>
              //     </div>
              //
              //   </div>

              var card = $("<div class=<'card'>");
              var body = $("<div class='card-body'>");
              var title = $("<h5 class = 'card-title'>").text(
                moment(fiveDay[index].dt, "X").format("MM/DD/YYYY")
              );
              var iconurl =
                "http://openweathermap.org/img/w/" +
                fiveDay[index].weather[0].icon +
                ".png";
              var img = $("<img>").attr("src", iconurl);
              var info = $("<p class= 'card-text'>").text(
                "Temperature: " + fiveDay[index].main.temp
              );
              body.append(title, info, img);

              card.append(body);
            //appends everything to card-group class
              $(".card-group").append(card);
            }
          }
        });
      });

      console.log(response);
    });
  });
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
//})}
