$(window).on('scroll load', function() {
    if ($(".navbar").offset().top > 500) {
        $(".fixed-top").addClass("greennav");
        $(".btn-login").addClass("yellowbtn");
        $(".btn-login").removeClass("btn-login");
    } else {
        $(".fixed-top").removeClass("greennav");
        $(".yellowbtn").addClass("btn-login");
        $(".yellowbtn").removeClass("yellowbtn");
    }
});