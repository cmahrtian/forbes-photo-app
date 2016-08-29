"use strict";

(function(){
  $(".pure-button").click(function(){
    event.preventDefault();

    var apiKey = "517ed29cb6d385f02ccb1f513ec4215e";
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" +$(".pure-input-rounded").val()+ "&api_key=" +apiKey+ "&per_page=10&format=json&jsoncallback=?";

    $.getJSON(url, function(data){
      $.each(data.photos.photo, function(i, item){
        var src = "http://farm" +item.farm+ ".static.flickr.com/" +item.server+ "/" +item.id+ "_" +item.secret+ "_m.jpg";
        $("<img/>").attr("src", src).click(function(){
          $("#overlay-image").attr("src", src);
          $(".overlay").show();
          $(".overlay-content").show();
        }).appendTo("#images");
      });
    });
  })

  $(".overlay-content").click(function(){
    $(".overlay-image").attr("src", "");
    $(".overlay").hide();
    $(".overlay-content").hide();
  })
})();