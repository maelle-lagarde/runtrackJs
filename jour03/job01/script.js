$(document).ready(function() {
    $('#show-button').click(function() {
        $('#text').removeClass('hidden');
    });

    $('#hide-button').click(function() {
        $('#text').addClass('hidden');
    });
});