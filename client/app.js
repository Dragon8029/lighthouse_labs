var socket = io();
var chat = $('#history');
var message = $('#message');

$('form').submit (function() {
    var text = $('#message').val();
    socket.emit('message', text);
    $('#message').val('');
    return false;
});

socket.on('message', function (msg) {
    chat.append("<li>" + data.message + "</li>")
});
