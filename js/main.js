$(document).ready(function() {

    // EXPANDED Speaker Data - All 14 speakers with clickable links
    const speakers = [
        {
            name: "Prof. Alfred Leitenstorfer",
            affiliation: "University of Konstanz",
            topic: "Measuring the quantum vacuum",
            image: "images/speakers/leitenstorfer.jpg",
            link: "https://www.leitenstorfer.uni-konstanz.de/personen/prof-dr-alfred-leitenstorfer/"
        },
        {
            name: "Prof. Markus Oberthaler",
            affiliation: "Heidelberg University",
            topic: "Cosmology in the laboratory",
            image: "images/speakers/oberthaler.jpg",
            link: "https://www.kip.uni-heidelberg.de/personen/552"
        },
        {
            name: "Prof. Aurelia Chenu",
            affiliation: "University of Luxembourg",
            topic: "TBD",
            image: "images/speakers/chenu.jpg",
            link: "https://www.uni.lu/fstm-en/people/aurelia-chenu/"
        },
        {
            name: "Dr. William Giarè",
            affiliation: "University of Sheffield",
            topic: "Cosmological tensions",
            image: "images/speakers/giare.jpg",
            link: "https://www.williamgiare.com/"
        },
        {
            name: "Ms. Alexa Marina Herter",
            affiliation: "ETH Zurich",
            topic: "Measuring vacuum correlations",
            image: "images/speakers/herter.jpg",
            link: "https://www.phys.ethz.ch/the-department/people/person-detail.MjY5OTcw.TGlzdC81MTUsMTE3MjU5OTI5OQ==.html"
        },
        {
            name: "Prof. Alexandre Tkatchenko",
            affiliation: "University of Luxembourg",
            topic: "TBD",
            image: "images/speakers/alex.jpg",
            link: "https://www.uni.lu/fstm-en/people/alexandre-tkatchenko/"
        },
        {
            name: "Prof. Matthias Fink",
            affiliation: "ESPCI Paris",
            topic: "Wave Control",
            image: "images/speakers/fink.jpeg",
            link: "https://en.wikipedia.org/wiki/Mathias_Fink"
        },
        {
            name: "Prof. Germain Rousseaux",
            affiliation: "University of Poitiers",
            topic: "Hydrodynamic Analogues",
            image: "images/speakers/rousseaux.jpg",
            link: "https://germain-rousseaux.cnrs.fr/"
        },
        {
            name: "Dr. Matthieu Sarkis",
            affiliation: "University of Luxembourg",
            topic: "TBD",
            image: "images/speakers/sarkis.jpg",
            link: "https://www.uni.lu/fstm-en/people/matthieu-sarkis/"
        },
        {
            name: "Prof. Stefan Rotter",
            affiliation: "Vienna University of Technology",
            topic: "Wave Phenomena",
            image: "images/speakers/rotter.jpg",
            link: "https://rottergroup.itp.tuwien.ac.at/"
        },
        {
            name: "Prof. Jörn Dunkel",
            affiliation: "Massachusetts Institute of Technology",
            topic: "TBD",
            image: "images/speakers/dunkel.png",
            link: "https://math.mit.edu/~dunkel/"
        },
        {
            name: "Prof. Alex Skupin",
            affiliation: "University of Luxembourg",
            topic: "TBD",
            image: "images/speakers/skupin.jpg",
            link: "https://www.uni.lu/fstm-en/people/alexander-skupin/"
        },
        {
            name: "Prof. Ulf Leonhardt",
            affiliation: "Weizmann Institute of Science",
            topic: "TBD",
            image: "images/speakers/ulf.jpg",
            link: "https://www.weizmann.ac.il/complex/prof-ulf-leonhardt"
        },
        {
            name: "Dr. Mohammad Reza Karimpour",
            affiliation: "University of Luxembourg",
            topic: "TBD",
            image: "images/speakers/reza.jpg",
            link: "https://www.uni.lu/fstm-en/people/mohammad-reza-karimpour/"
        }
    ];

    // Organizer Data with clickable links
    const organizers = [
        {
            name: "Prof. Alexandre Tkatchenko",
            affiliation: "University of Luxembourg",
            image: "images/speakers/alex.jpg",
            link: "https://www.uni.lu/fstm-en/people/alexandre-tkatchenko/"
        },
        {
            name: "Prof. Ulf Leonhardt",
            affiliation: "Weizmann Institute of Science",
            image: "images/speakers/ulf.jpg",
            link: "https://www.weizmann.ac.il/complex/prof-ulf-leonhardt"
        }
    ];

    // --- Dynamic Card Generation ---

    // Generate CLICKABLE Speaker Cards with layout fix
    const speakerList = $('#speakerList');
    speakers.forEach((speaker, index) => {
        // Build the speaker card HTML with clickable link
        const speakerCard = `
            <div class="col-md-4 col-sm-6 reveal-element">
                <a href="${speaker.link}" target="_blank" class="speaker-link">
                    <div class="speaker-card">
                        <img src="${speaker.image}" alt="${speaker.name}" class="img-responsive">
                        <div class="speaker-info">
                            <h4>${speaker.name}</h4>
                            <h5>${speaker.affiliation}</h5>
                            <p>${speaker.topic}</p>
                            <div class="click-indicator">
                                <i class="fas fa-arrow-right"></i>
                                <span>Learn More</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>`;
        speakerList.append(speakerCard);

        // *** THIS IS THE FIX ***
        // After every 3rd speaker, add a clearing div to fix alignment
        if ((index + 1) % 3 === 0) {
            speakerList.append('<div class="clearfix visible-md-block visible-lg-block"></div>');
        }
    });

    // Generate CLICKABLE Organizer Cards
    const organizerList = $('#organizerList');
    organizers.forEach(organizer => {
        // Build the organizer card HTML with clickable link
        const organizerCard = `
            <div class="col-md-6 col-sm-6 reveal-element">
                <a href="${organizer.link}" target="_blank" class="speaker-link">
                    <div class="speaker-card">
                        <img src="${organizer.image}" alt="${organizer.name}" class="img-responsive">
                        <div class="speaker-info">
                            <h4>${organizer.name}</h4>
                            <h5>${organizer.affiliation}</h5>
                            <div class="click-indicator">
                                <i class="fas fa-arrow-right"></i>
                                <span>Learn More</span>
                            </div>
                        </div>
                    </div>
                </a>
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