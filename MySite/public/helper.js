$( document ).ready(function() {
  console.log( "ready!" );
});
// make a new function for this

$.getJSON('/scrape', function(data){
  console.log(data[0].title);

});
