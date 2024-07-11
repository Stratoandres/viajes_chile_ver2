$(document).ready(function() {
    // Smooth scroll for navigation links
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

    // Tooltip initialization
    $('[data-toggle="tooltip"]').tooltip();

    // Hover effect for the logo
    $('.navbar-brand .logo').hover(
        function() {
            $(this).addClass('logo-hover');
        }, function() {
            $(this).removeClass('logo-hover');
        }
    );
});
