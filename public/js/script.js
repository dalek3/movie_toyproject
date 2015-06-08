$(function () {
	var $container = $('.grid');
	// Ajax를 수행합니다.
			$('.grid-item').imagesLoaded(function () {
				$container.isotope({ 
				});
			$('#myModal').on('hidden.bs.modal',function(){
				$(this).removeData('bs.modal')
			});
			$container.infinitescroll({
					navSelector: '#page-nav', // selector for the paged navigation 
					nextSelector: '#page-nav a', // selector for the NEXT link (to page 2)
					itemSelector: ".grid-item", // selector for all items you'll retrieve
				   /*loading: {
						finishedMsg: '로드할 페이지가 더 이상 없습니다.',
						msgText: "<em>다음 페이지를 로딩합니다.</em>",
						img: 'http://i.imgur.com/6RMhx.gif'
					}*/
				},
				// trigger Masonry as a callback
				function (newElements) {
					$container.isotope('appended', $(newElements));
				}
			);
	});
});