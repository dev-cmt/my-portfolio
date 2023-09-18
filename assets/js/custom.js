/**_________________________________________________________
 * PRELOADER
 * _________________________________________________________
 */
let loader = document.querySelector('.page-preloader');
window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disppear")
}

/**_________________________________________________________
 * Color Switcher
 * _________________________________________________________
 */
$(document).ready(function(){
	// Show Colors Panel
	$('#show-panel').click(function(){
		if($(this).hasClass('show-panel')) {
			$('.colors-switcher').css({'right': 0});
			$('#show-panel').removeClass('show-panel');
			$('#show-panel').addClass('hide-panel');
		}else if($(this).hasClass('hide-panel')) {
			$('.colors-switcher').css({'right': '-100px'});
			$('#show-panel').removeClass('hide-panel');
			$('#show-panel').addClass('show-panel');
		}
	});
});

//--Click Change Color
const changeColorButtons = document.querySelectorAll('.change-color');
changeColorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const newColor = this.getAttribute('data-color');
        document.documentElement.style.setProperty('--default', newColor);
    });
});
/**_________________________________________________________
 * COUNTER
 * _________________________________________________________
 */
$('.timer').countTo();

$('.counter-item').appear(function() {
    $('.timer').countTo();
},{accY: -100});


/**_________________________________________________________
 * NAV MENU SCROLL
 * _________________________________________________________
 */

const header = document.getElementById('header');
const colorNavbarLinks = document.querySelectorAll('.navbar ul li a'); 
const loginButton = document.querySelectorAll('.login-button-mobile'); 

function toggleHeaderBackground() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        colorNavbarLinks.forEach(link => {
            link.style.color = '#222';
        });
        colorNavbarLinks.forEach(link => {
            link.style.color = '#222';
        });
    } else {
        header.classList.remove('scrolled');
        colorNavbarLinks.forEach(link => {
            link.style.color = ''; // Restore the default link color
        });
    }
}

window.addEventListener('scroll', toggleHeaderBackground);

/**_________________________________________________________
 * SLIDER INTRO SHOW TIME
 * _________________________________________________________
 */

function showLeftAnimation() {
    const introCover = document.querySelector('.intro-cover');
    const introTitle = document.querySelector('.intro-title');
    const introText = document.querySelector('.intro-text');
    introCover.classList.add('active');
    introTitle.classList.add('active');
    introText.classList.add('active');
}
// Wait for 5 seconds (5000 milliseconds) before triggering the animation
setTimeout(showLeftAnimation, 1000);


/**_________________________________________________________
 * OWL - SLIDER
 * _________________________________________________________
 */

////------- Testimonials Carousel
	
var testimonial = $("#testimonial-carousel");

testimonial.owlCarousel({
	navigation : true,
	pagination: true,
	slideSpeed : 2500,
	stopOnHover: true,
	autoPlay: 3000,
	singleItem: true,
	transitionStyle : "fade",
	navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

	

////------- Pricing Table

$(document).ready(function() {
 
  $(".pricing").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
      stopOnHover: true,
        autoPlay: 3000,
        singleItem:false,
          itemsMobile : [550,1],
          itemsDesktopSmall : [991,2],
          items: 4,
      transitionStyle : "fade",
      navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});


////------- Latest News

$(document).ready(function() {
 
  $(".latest-news").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 4000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 3,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});



////------- Team Carousel

$(document).ready(function() {
 
  $(".our-team").owlCarousel({
        pagination: true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
        items: 4,
    	//singleItem:true,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});



////------- Partner/CLients

$(document).ready(function() {
 
  $(".clients").owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 5,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});



/**_________________________________________________________
 * OWL ORG - SLIDER
 * _________________________________________________________
 */

//-----Events
$(document).ready(function() {
    $("#owl-upcoming-events").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay : 3000,
    });

});

//-----Services
$(document).ready(function () {
    $("#owl-services").owlCarousel({
        items: 4
    });
    $('.link').on('click', function (event) {
        var $this = $(this);
        if ($this.hasClass('clicked')) {
            $this.removeAttr('style').removeClass('clicked');
        } else {
            $this.css('background', '#7fc242').addClass('clicked');
        }
    });
});

//-----Team Member
$(document).ready(function () {
    $("#owl-gallery").owlCarousel({
        items: 2
    });
    $('.link').on('click', function (event) {
        var $this = $(this);
        if ($this.hasClass('clicked')) {
            $this.removeAttr('style').removeClass('clicked');
        } else {
            $this.css('background', '#7fc242').addClass('clicked');
        }
    });
});

//-----Clients
$(document).ready(function() {
    $("#owl-clients").owlCarousel({
        items: 5,
        navigation: false,
        pagination: false,
    });

    $('.link').on('click', function (event) {
        var $this = $(this);
        if ($this.hasClass('clicked')) {
            $this.removeAttr('style').removeClass('clicked');
        } else {
            $this.css('background', '#7fc242').addClass('clicked');
        }
    });

});


/**_________________________________________________________
 * GSAP - SCROLLTRIGGER
 * _________________________________________________________
 */
const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger:text,
        toggleClass:'active',
        // start: "top 90%",
        // end: "top 10%",
    })
})


/**_________________________________________________________
 * SCROLL - REVEAL BAR-BORDER
 * _________________________________________________________
 */
const scroll_indicator = document.getElementById("scroll-indicator");

window.addEventListener("scroll", function () {
  const maxScrollHeight = document.body.scrollHeight - window.innerHeight;

  const currentScrollHeight = (window.scrollY / maxScrollHeight) * 100;
  scroll_indicator.style.width = `${currentScrollHeight}%`;
});

/**_________________________________________________________
 * SCROLL - REVEAL ANIMATION
 * _________________________________________________________
 */

window.sr = ScrollReveal({
  reset: true,
});

sr.reveal(".hero .intro", {
  duration: 2000,
  origin: "left",
  distance: "200px",
});
sr.reveal(".hero .intro .btn", {
  duration: 2000,
  origin: "left",
  distance: "200px",
  delay: 200,
});

sr.reveal(".hero .image", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

// about
sr.reveal(".about .intro", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

sr.reveal(".about .img", {
  duration: 2000,
  origin: "left",
  distance: "200px",
  rotate: {
    x: 60,
    y: 45,
  },
});

/* services */
sr.reveal(".services .intro", {
  duration: 2000,
  origin: "top",
  distance: "200px",
});

sr.reveal(".services .img", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
});

// portfolio
sr.reveal(".portfolio .intro", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
});

sr.reveal(".portfolio .img", {
  duration: 2000,
  origin: "top",
  distance: "200px",
});

sr.reveal(".projects .intro", {
  duration: 2000,
  origin: "left",
  distance: "200px",
});

sr.reveal(".projects .img", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

sr.reveal(".Clients .intro", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

sr.reveal(".Clients .img", {
  duration: 2000,
  origin: "left",
  distance: "200px",
});
