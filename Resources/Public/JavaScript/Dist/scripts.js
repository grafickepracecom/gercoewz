/*!
 * GercoTemplate v1.0.0 (http://www.grafickeprace.com)
 * Copyright 2017-2020 grafickeprace.com
 * Licensed under the GPL-2.0-or-later license
 */
 $(document).ready(function() {
 	$( "body" ).scroll(function() {
 		$("nav#main-nav").css("top",$("body").scrollTop()+"px");
 		if ($("body").scrollTop() > 0) {
 			$( "div#down-arrow" ).fadeOut( "slow" );
 		} else {
 			$( "div#down-arrow" ).fadeIn( "slow" );
 		}
 	});
 });

 $('a#down-arrow').click(function (event)
 {
 	event.preventDefault();
 	$("body").animate({
 	 scrollTop: ($( $(this).attr('href') ).offset().top - 70)
  }, 600);
 });

 $('a#up-arrow').click(function (event)
 {
 	event.preventDefault();
 	$("body").animate({
 	 scrollTop: 0
  }, 600);
 });
