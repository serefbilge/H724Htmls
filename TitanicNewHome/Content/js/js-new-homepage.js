//------------------------------
//Picker
//------------------------------

jQuery(function() {
	jQuery( "#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8" ).datepicker();
});


//------------------------------
//Custom Select
//------------------------------
jQuery(document).ready(function(){
	jQuery('.mySelectBoxClass').customSelect();

	/* -OR- set a custom class name for the stylable element */
	//jQuery('.mySelectBoxClass').customSelect({customClass:'mySelectBoxClass'});
});

function mySelectUpdate(){
	setTimeout(function (){
		jQuery('.mySelectBoxClass').trigger('update');
	}, 200);
}

jQuery(window).resize(function() {
	mySelectUpdate();
});


//------------------------------
//CaroufredSell
//------------------------------
jQuery(document).ready(function(jQuery){

	jQuery("#foo").carouFredSel({
		width: "100%",
		height: 240,
		items: {
			visible: 6,
			minimum: 1,
			start: 2
		},
		scroll: {
			items: 1,
			easing: "easeInOutQuad",
			duration: 500,
			pauseOnHover: true
		},
		auto: false,
		prev: {
			button: "#prev_btn",
			key: "left"
		},
		next: {
			button: "#next_btn",
			key: "right"
		},				
		swipe: true
	});
	
	
	jQuery("#foo2").carouFredSel({
		width: "100%",
		height: 240,
		items: {
			visible: 6,
			minimum: 1,
			start: 2
		},
		scroll: {
			items: 1,
			easing: "easeInOutQuad",
			duration: 500,
			pauseOnHover: true
		},
		auto: false,				
		prev: {
			button: "#prev_btn2",
			key: "left"
		},
		next: {
			button: "#next_btn2",
			key: "right"
		},				
		swipe: true
	});
	

});



//------------------------------
//Add rooms
//------------------------------
		function addroom2(){
			jQuery('.room2').addClass('block');
			jQuery('.room2').removeClass('none');
			jQuery('.addroom1').removeClass('block');
			jQuery('.addroom1').addClass('none');
			
		}
		function removeroom2(){
			jQuery('.room2').addClass('none');
			jQuery('.room2').removeClass('block');
			
			jQuery('.addroom1').removeClass('none');
			jQuery('.addroom1').addClass('block');
		}
		function addroom3(){
			jQuery('.room3').addClass('block');
			jQuery('.room3').removeClass('none');
			
			jQuery('.addroom2').removeClass('block');
			jQuery('.addroom2').addClass('none');
		}
		function removeroom3(){
			jQuery('.room3').addClass('none');
			jQuery('.room3').removeClass('block');
			
			jQuery('.addroom2').removeClass('none');
			jQuery('.addroom2').addClass('block');			
		}
	


		//Center searchfield
		//jQuery('.sboxpurple').addClass('searchvalign');
		
		var $ = jQuery.noConflict();
		
		$(document).ready(function(){
			function centerSearch(){
				var $sih = $(window).height();
				var $srcHeight = $('.searchcontainer').innerHeight();
				var $srcValign = $sih/2 - $srcHeight;
				
				$('.searchcontainer').css({'opacity': 0, 'marginTop' : $srcValign - 30  +'px'});

				setTimeout(function (){
					$('.searchcontainer').stop().animate({'opacity': 1, 'marginTop' : $srcValign  +'px'}, 1000);		
				
				}, 1500);
				
			}
			centerSearch();
			
		});	
