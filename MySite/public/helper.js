$( document ).ready(function() {
  console.log( "ready!" );
});
// make a new function for this

$.getJSON('/scrape', function(data){
  console.log(data[1].title);
  for(var i = 0; i<data.length;i++){
    $("<p>" + data[i].title + "</p>").appendTo("#helper")
  }
});
