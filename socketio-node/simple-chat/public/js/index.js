var socket = io();
$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#messages').append($('<li>').text($('#m').val()));
  $('#m').val('');
  return false;
});

socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
