$('input').focus(function () {
    $(this).parent().addClass('red');
}).blur(function () {
    $(this).parent().removeClass('red');
});
