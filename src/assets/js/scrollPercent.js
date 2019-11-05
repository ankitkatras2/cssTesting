$(document).ready(function () {
    $(window).scroll(function (e) {

        var currY = $(window).scrollTop();
        var postHeight = $(document).height();
        var scrollHeight = $(window).height();
        var scrollPercent = (currY / (postHeight - scrollHeight)) * 100;
        $('.bar-long').css('width', scrollPercent + "%");

    });
});
