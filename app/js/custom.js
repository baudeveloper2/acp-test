//========================
// Strict Syntax Rendering
//========================
"use strict";

$(function() {
	
	//initialize sliderMain
	$("#carouselMain").carousel({
		interval: 40000
	});

	//navbar bg change on scroll
	$(document).scroll(function () {
		$(".main-navbar").toggleClass("solid", $(this).scrollTop() > $(".main-navbar").height());
	});

	//offcanvass menu and hamburger icon
	$("#hamburger").click(function() {
		$(this).toggleClass("is-active");
		$("body").toggleClass("show-menu");
	});

	//smoothscroll
	$("#down-arrow").click(function() {
		document.querySelector("section.cta-product").scrollIntoView({ 
			behavior: "smooth" 
		  });
	});

	//stickyfill
	var elements = $(".sticky");
	Stickyfill.add(elements);

});
