$( document ).ready(function() {
  console.log( "ready!" );
});
// make a new function for this

$.getJSON('/scrape', function(data){
  console.log(data);
  for(var i = 0; i<30;i++){
    $("<p>" + data[i].rank + ". " + "<a href=" + data[i].url + ">" + data[i].title + "</a></p>").appendTo("#helper")
  }
});
