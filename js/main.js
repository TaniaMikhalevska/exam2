'use strict';

(function($){
	$(document).ready(function() {
        		// link ancor
        	$('.header a').click(function(){
		    $('html, body').animate({
		        scrollTop: $($.attr(this, 'href')).offset().top - 119
		    }, 600);
		    return false;
		});
        
        
        
		// tabs
        $( function() {
    $( ".portfolio__tabs" ).tabs();
  } );
        
        //slider
         $('.team__slider').slick({
             arrows: false,
             infinite: false,
             autoplay: false,
             dots: true
             
  });
        
        $('.testi__slider').slick({
             arrows: false,
             infinite: false,
             autoplay: false,
             dots: true
             
  });
        /*massonry
        $('.tab__demonstration').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true
})*/

	});
})(jQuery);
//map
function initMap() {
           var center = {lat: 49.568678, lng: 34.585731},
               map  = new google.maps.Map(document.getElementById('map'), {
                          zoom: 15, 
                          center: center,
                          disableDefaultUI: true,
                          zoomControl: true
               }),
               marker = new google.maps.Marker({
                        title: 'Beetroot',
                        position: {lat: 49.568678, lng: 34.585731},
                        icon: 'images/marker.png',
                        map: map
               }),
               infowindow =new google.maps.InfoWindow;
          
          google.maps.event.addListener(marker, 'click', (function(marker) {
           var info = '<div class="window">'+'<h1 class="window__title">' +marker.title+'</h1>'+'<p>'+'Welcome to Beetroot'+'</p>'+'</div>';
           return function() {
           infowindow.setContent(info);
           infowindow.open(map, marker);
                    }})(marker));
               };
google.maps.event.addDomListener(window, 'load', initMap);     
