var mapLocation=new google.maps.LatLng(28.607808,77.0643286);var marker;var map;function initialize(){var mapOptions={zoom:14,center:mapLocation,scrollwheel:false,styles:[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#f6954d"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#e3e2e2"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a4c4c8"},{"visibility":"on"}]}]};map=new google.maps.Map(document.getElementById('map'),mapOptions);var contentString='<div class="map-info">'
+'<div class="map-title">'
+'<div class="brand" href="#"><img alt="" src="images/brand.png"><div class="brand-info"><div class="brand-name">4Clover</div><div class="brand-text">architecture &amp; design</div></div></div></div>'
+'<div class="map-address-row">'
+'  <span class="text"><strong class="text-dark">#909, First Floor,Opp,Main Mkt, Sector-6,</strong><br>'
+'  Karnal - 132001</span>'
+'</div>'
+'<div>'
+'   <span class="text"><strong class="text-dark">Phone:</strong>+91 99962 45152</span>'
+'</div>'
+'<div class="map-address-row">'
+'   <span class="map-email">'
+'      <span class="text"><strong class="text-dark">Email:</strong> 4cloverarchitects@gmail.com</span>'
+'   </span>'
+'</div>'
+'<p class="gmap-open"><a href="https://www.google.com/maps/@28.607808,77.0643286,14z?hl=ru-RU" target="_blank">Open on Google Maps</a></p></div>';var infowindow=new google.maps.InfoWindow({content:contentString,});marker=new google.maps.Marker({map:map,draggable:true,title:'Bauhaus',animation:google.maps.Animation.DROP,position:mapLocation});google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});}
if($('#map').length){google.maps.event.addDomListener(window,'load',initialize);}