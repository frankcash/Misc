$(function(){
  var up = $('#up').asEventStream('click');
  var down = $('#down').asEventStream('click');

  var counter = up.map(1).merge(down.map(-1)).scan(0, function(x,y){
      console.log("foo");
      return x+y;
    });

  counter.assign($('#counter'), "text");

  console.log("up", up);
  console.log("down", down);
});
