 $(function() {
 	
 	$('.menutren ul li:nth-child(1) a').click(function(event) {
 		event.preventDefault();

 		$('html,body').animate({scrollTop:$('.chapter1').offset().top },1400,"easeOutCubic");

 	});
 	$('.menutren ul li:nth-child(2) a').click(function(event) {
 		event.preventDefault();

 		$('html,body').animate({scrollTop:$('.chapter2').offset().top },400);

 	});
 	$('.menutren ul li:nth-child(3) a').click(function(event) {
 		event.preventDefault();

 		$('html,body').animate({scrollTop:$('.chapter3').offset().top },400);

 	});
 	$('.menutren ul li:nth-child(4) a').click(function(event) {
 		event.preventDefault();

 		$('html,body').animate({scrollTop:$('.chapter4').offset().top },400);

 	});
 		$('.nutlentren').click(function(event) {
 		event.preventDefault();

 		  $('html,body').animate({scrollTop: 0},400);

 	});
  
 });