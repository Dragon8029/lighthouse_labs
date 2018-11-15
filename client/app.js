var socket = io();
$('form').submit (function() {
    var text = $('#message').val();
    socket.emit('message', text);
    $('#message').val('');
    return false;
});

socket.on('message', function (msg) {
    $('<li>' + '#initial').text(msg).appendTo('#history');
});
