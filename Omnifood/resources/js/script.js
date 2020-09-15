// every document that our jquery will run needs to start like this down here. this ensures tat the script will only run after the document has benn loaded

// this is only possibly thanks to the jQuery btw, normal js don't do that

// first off, let's build a stick navigation, meaning that when we scroll the page, the navigation tab follows us
$(document).ready(function() {
     
    /* TEST CODE */
    /*
    // $ to select a html element and click to call the function
    $('h1').click(function() {
        // then we select this (the said element) and put a css property to adjust it
        $(this).css('background-color', '#ff8080')  
    })
    */

    // this code here only works 'cause of the waypoint js file in the vendors folder

    
    /* STICKY NAVIGATION  */
    var waypoint = new Waypoint({

        // the waypoint here is the end of the section featutes element
        element: $('.js--section-features'),

        handler: function(direction) {

            if (direction == 'down') {
                $('nav').addClass('sticky');

            } else {
                $('nav').removeClass('sticky');
            };
        },

        // this offset propertie to set where the waypoint will be activeted relativility with the element select (in this case, 100px before the end)
        offset: '100px;'

    });


    /* SCROLL ON BUTTONS CLICK */

    // what hppens here is, when we click the i'm hungry button, itstarts a animations that takes us to section-plans in the spam of 1 second

    /* I'M HUNGRY BTN */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    /* SHOW ME MORE BTN */
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });



    /* NAVIGATION LINKS SCROLL - snippet code */

    // Select all links with hashes
    $('a[href*="#"]')

    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    
    .click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname) {

            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // Does a scroll target exist?
            if (target.length) {

                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: target.offset().top

                }, 1000, function() {
                    // Callback after animation

                    // Must change focus!
                    var $target = $(target);

                    $target.focus();

                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;

                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


    /* ANIMATIONS ON SCROLL */

    var waypoint2 = new Waypoint({

        element: $('.js--wp-1'),

        handler: function(direction) {
            this.element.addClass('animate__fadeIn');
        },

        offset: '50%;'
    });


    var waypoint3 = new Waypoint({

        element: $('.js--wp-2'),

        handler: function(direction) {
            this.element.addClass('animate__fadeInUp');
        },

        offset: '50%;'
    });


    var waypoint4 = new Waypoint({

        element: $('.js--wp-3'),

        handler: function(direction) {
            this.element.addClass('animate__fadeIn');
        },

        offset: '50%;'
    });


    var waypoint5 = new Waypoint({

        element: $('.js--wp-4'),

        handler: function(direction) {
            this.element.addClass('animate__pulse');
        },

        offset: '50%;'
    });

});