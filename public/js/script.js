$(function () {
	var $container = $('.grid');

	$('.grid-item').imagesLoaded(function () {
		$container.isotope({ });
		/*$container.infinitescroll({
			navSelector: 'a#next:last', // selector for the paged navigation 
			nextSelector: 'a#next:last', // selector for the NEXT link (to page 2)
			itemSelector: '.grid-item', // selector for all items you'll retrieve
			dataType: 'json',
			debug: true,
			appendCallback	: false // USE FOR PREPENDING
		},
		function( response ) {
			var jsonData = response.results;
			var html = '';
			$.each(jsonData, function (index, item) {
				html += '<div class="grid-item">';
				html += '<a class="thumbnail">'
				html += '<img src="' + item.title + '">';
				html += '</a>'
				html += '</div>';
			});
			$container.append(html).isotope('appended', $('.grid-item'))
			
	      });*/
	});
	$('#myModal').on('hidden.bs.modal',function(){
		$(this).removeData('bs.modal')
	});	
});