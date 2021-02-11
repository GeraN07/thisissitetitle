$('.page-header__burger-button').click(function() {
    $('.burger-button__icon').toggleClass('active');
})
$('.page-header__burger-button').click(function() {
    $('.aside-menu').toggleClass('active');
})
$('.login-card__close-button').click(function() {
    $('.modal-login').toggleClass('active');
})
$('.page-header__support-button').click(function() {
    $('.triangle-block').toggleClass('active');
})
$('.page-header__support-button').click(function() {
    $('.support-info ').toggleClass('active');
})
$(document).click(function(event) {
    if ($(event.target).closest(".page-header__support-button, .display_settings i").length) return;   //при клике на эти блоки не скрывать .display_settings_content
    $(".support-info ").removeClass('active');  //скрываем .display_settings_content при клике вне .display_settings_content
    $(".triangle-block").removeClass('active');
    event.stopPropagation();
});