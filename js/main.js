$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});

function searching(){
	//declare variables
	var input = document.getElementById('search');
	var filter = input.value.toUpperCase();
	var ul = document.getElementById('imageGallery');
	var li = ul.getElementsByTagName('li');
	var i;
	var a;

	//loop through all list items, and hide non matching from the search query
	for (i=0; i<li.length; i++){
		a = li[i].getElementsByTagName('a')[0];
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}

	}
	

}