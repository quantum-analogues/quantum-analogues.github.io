$(document).ready(function() {

    // Speaker Data
    const speakers = [
        {
            name: "Prof. Alfred Leitenstorfer",
            affiliation: "University of Konstanz",
            topic: "Measuring the quantum vacuum",
            image: "images/speakers/leitenstorfer.jpg"
        },
        {
            name: "Prof. Markus Oberthaler",
            affiliation: "Heidelberg University",
            topic: "Cosmology in the laboratory",
            image: "images/speakers/oberthaler.jpg"
        },
        {
            name: "Dr. W. Giare",
            affiliation: "University of Cambridge",
            topic: "Cosmological tensions",
            image: "images/speakers/giare.jpg"
        },
        {
            name: "Ms. Tina Hertel",
            affiliation: "ETH Zurich",
            topic: "Measuring vacuum correlations",
            image: "images/speakers/herter.jpg"
        },
        {
            name: "Prof. Matthias Fink",
            affiliation: "ESPCI Paris",
            topic: "Wave Control",
            image: "images/speakers/fink.jpeg"
        },
        {
            name: "Prof. Germain Rousseaux",
            affiliation: "University of Poitiers",
            topic: "Hydrodynamic Analogues",
            image: "images/speakers/rousseaux.jpg"
        },
        {
            name: "Prof. Stefan Rotter",
            affiliation: "Vienna University of Technology",
            topic: "Wave Phenomena",
            image: "images/speakers/rotter.jpg"
        },
        {
            name: "Prof. Jörn Dunkel",
            affiliation: "Massachusetts Institute of Technology",
            topic: "TBD",
            image: "images/speakers/dunkel.png"
        }
    ];

    // Organizer Data
    const organizers = [
        {
            name: "Prof. Alexandre Tkatchenko",
            affiliation: "University of Luxembourg",
            image: "images/speakers/alex.jpg"
        },
        {
            name: "Prof. Ulf Leonhardt",
            affiliation: "University of Luxembourg",
            image: "images/speakers/ulf.jpg"
        }
    ];

    // --- Dynamic Card Generation ---

    // Generate and inject Speaker Cards with layout fix
    const speakerList = $('#speakerList');
    speakers.forEach((speaker, index) => {
        // Build the speaker card HTML
        const speakerCard = `
            <div class="col-md-4 col-sm-6 reveal-element">
                <div class="speaker-card">
                    <img src="${speaker.image}" alt="${speaker.name}" class="img-responsive">
                    <div class="speaker-info">
                        <h4>${speaker.name}</h4>
                        <h5>${speaker.affiliation}</h5>
                        <p>${speaker.topic}</p>
                    </div>
                </div>
            </div>`;
        speakerList.append(speakerCard);

        // *** THIS IS THE FIX ***
        // After every 3rd speaker, add a clearing div to fix alignment
        if ((index + 1) % 3 === 0) {
            speakerList.append('<div class="clearfix visible-md-block visible-lg-block"></div>');
        }
    });

    // Generate and inject Organizer Cards
    const organizerList = $('#organizerList');
    organizers.forEach(organizer => {
        // Build the organizer card HTML using the same structure as speaker cards
        const organizerCard = `
            <div class="col-md-6 col-sm-6 reveal-element">
                <div class="speaker-card">
                    <img src="${organizer.image}" alt="${organizer.name}" class="img-responsive">
                    <div class="speaker-info">
                        <h4>${organizer.name}</h4>
                        <p>${organizer.affiliation}</p>
                    </div>
                </div>
            </div>`;
        organizerList.append(organizerCard);
    });

    // --- Basic Website Functionality (Preloader, Slider, Menu, etc.) ---

    // Preloader
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1000);

    // Header Slider
    if ($('.header-slider').length) {
        $('.header-slider .slides').imagesLoaded(function() {
            $('.header-slider').flexslider({
                animation: "fade",
                controlNav: false,
                directionNav: false,
                slideshowSpeed: 4000,
                animationSpeed: 1000,
                pauseOnAction: false,
                smoothHeight: true
            });
        });
    }

    // Mobile Menu
    $('.navbar-toggle').on('click', function() {
        $('#menu').toggleClass('open-menu');
    });

    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                if ($('#menu').hasClass('open-menu')) {
                    $('#menu').removeClass('open-menu');
                }
                return false;
            }
        }
    });

    // Animate on scroll
    function revealOnScroll() {
        var $elems = $('.reveal-element');
        var winheight = $(window).height();
        $elems.each(function() {
            var $this = $(this);
            var pos = $this.offset().top;
            if (pos < $(window).scrollTop() + winheight - 50) {
                $this.addClass('revealed');
            }
        });
    }

    $(window).scroll(function() {
        revealOnScroll();
    });
    revealOnScroll(); // Initial check

});