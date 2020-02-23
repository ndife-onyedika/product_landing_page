function menuscroll() {
    var $navmenu = $('.navbar');
    if ($(window).scrollTop() > 50) {
        $navmenu.addClass('scroll');
    } else {
        $navmenu.removeClass("scroll");
    }
}
menuscroll();
$(window).on('scroll', function() {
    menuscroll();
});
var siteNav = $('#navbarCollapse');
siteNav.on('show.bs.collapse', function(e) {
    $(this).parents('.navbar').addClass('menu');
})
siteNav.on('hide.bs.collapse', function(e) {
    $(this).parents('.navbar').removeClass('menu');
})