$(document).ready(function() {
    // Smooth scroll
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Hover
    $('.navbar-brand .logo').hover(
        function() {
            $(this).addClass('logo-hover');
        }, function() {
            $(this).removeClass('logo-hover');
        }
    );
});
