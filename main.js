"use strict";

(function(){
  $(".pure-button").click(function(){
    event.preventDefault();

    var apiKey = "517ed29cb6d385f02ccb1f513ec4215e";
    var pageNumber = 1;
    
    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" +$(".pure-input-rounded").val()+ "&api_key=" +apiKey+ "&page=" +pageNumber+ "&per_page=10&format=json&jsoncallback=?", function(data){
      $.each(data.photos.photo, function(i, item){
        var src = "http://farm" +item.farm+ ".static.flickr.com/" +item.server+ "/" +item.id+ "_" +item.secret+ "_m.jpg";
        $("<img/>").attr("src", src).click(function(){
          $("#overlay-image").attr("src", src);
          $(".overlay").show();
          $(".overlay-content").show();
        }).appendTo("#images");
      });
    });

    $("<button class='previous-button'>Previous Page</button>").appendTo("#toggle-buttons").hide();
    $("<button class='next-button'>Next Page</button>").appendTo("#toggle-buttons");
    
    $(".next-button").click(function(){
      $("#images").empty();
      pageNumber++;
      $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" +$(".pure-input-rounded").val()+ "&api_key=" +apiKey+ "&page=" +pageNumber+ "&per_page=10&format=json&jsoncallback=?", function(data){
        $.each(data.photos.photo, function(i, item){
          var src = "http://farm" +item.farm+ ".static.flickr.com/" +item.server+ "/" +item.id+ "_" +item.secret+ "_m.jpg";
          $("<img/>").attr("src", src).click(function(){
            $("#overlay-image").attr("src", src);
            $(".overlay").show();
            $(".overlay-content").show();
          }).appendTo("#images");
        });
      });
      if (pageNumber > 1) {
        $(".previous-button").show();
      } else if (pageNumber === data.photos.pages) {
        $(".next-button").hide();
      }  
    });      
  })

  $(".overlay").click(function(){
    $(".overlay-image").attr("src", "");
    $(".overlay").hide();
    $(".overlay-content").hide();
  })
})();