"use strict";

(function(){
  $(".pure-button").click(function(){
    event.preventDefault();

    var apiKey = "517ed29cb6d385f02ccb1f513ec4215e";
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" +$(".pure-input-rounded").val()+ "&api_key=" +apiKey+ "&per_page=10&format=json&jsoncallback=?";

    $.getJSON(url, function(data) {
      console.log(data.photos.photo[0]);
    });

    // $.ajax({
    //   type: "GET",
    //   url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=soccer&api_key=517ed29cb6d385f02ccb1f513ec4215e&per_page=10&format=json&jsoncallback=?",
    //   success: function(data){
    //     var photos = data.photos;
    //     console.log(photos.photo[0]);
    //   }
    // });
  })
})();