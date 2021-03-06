const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// on scroll navbar background
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if (scroll > 100 && $(window).width() <= 480) {
	  $(".nav-bar").css("background" , "#fff");
	}

	else{
		$(".nav-bar").css("background" , "none");  	
	}
})

// back to top button

//Get the button
var mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//fancybox caption
$('[data-fancybox="gallery"]').fancybox({
	caption : function( instance, item ) {
	  var caption = $(this).data('caption') || '';
  
	  if ( item.type === 'image' ) {
		caption = '<a href="http://' + caption + '" target="_blank">' + caption + '</a>' ;
	  }
  
	  return caption;
	}
  });
