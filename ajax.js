$(document).ready(function(){
  $.ajax({
    method: "GET",
    url:'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=01ba3f37c9b38dd927ac8105c1ec5e97&tags=lighthouse&format=json&nojsoncallback=1&auth_token=72157673079955885-ef7ac61969d8a5e3&api_sig=c1bcf8d0eb82dbdfb6979214d716f901',
    dataType: "json",
  }).done(function(response){
    console.log(response);
    var gallary= []
    response.photos.photo.forEach(function(img) { 
       gallary.push('<img src= "https://farm'+ img.farm +'.staticflickr.com/'+img.server+'/'+ img.id +'_' + img.secret+'.jpg" ></img>');
    });
    var i = 0; 
    var showPhotos = setInterval(function(){
      if (i< gallary.length){
        $(gallary[i]).fadeIn(1000).appendTo('#img_display').delay(03000).fadeOut(1000);
        i++;
      }else{
        clearInterval(showPhotos);
      }
    },4000)
  });
});