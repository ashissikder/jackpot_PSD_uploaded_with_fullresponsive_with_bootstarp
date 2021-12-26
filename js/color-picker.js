// color-picker
$('.color-picker .color-btn').on('click',function(){
    $('.color-picker').toggleClass('color-pos');
});
// theme-added
$('.red').on('click',function(){
    $('body').addClass('red').removeClass('green').removeClass('purple').removeClass('yellow');
});
$('.purple').on('click',function(){
    $('body').addClass('purple').removeClass('green').removeClass('red').removeClass('yellow');
});
$('.green').on('click',function(){
    $('body').addClass('green').removeClass('red').removeClass('purple').removeClass('yellow');
});
$('.yellow').on('click',function(){
    $('body').addClass('yellow').removeClass('green').removeClass('purple').removeClass('red');
});
$('.default').on('click',function(){
    $('body').removeClass('green').removeClass('purple').removeClass('red').removeClass('yellow');
});