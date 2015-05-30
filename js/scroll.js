//무한 스크롤
$(document).ready(function() {
	$(window).scroll(function(event) {
		/* Act on the event */
		var scrollHeight = $(window).scrollTop()+ $(window).height();
		var documentHeight = $(document).height();

		//스크롤의 높이와 문서의 높이가 같을때
		if(scrollHeight = documentHeight){
			for (var i = 0; i < 10; i++) {
				$(".thumbnail").appendTo('body');
			};
		}
	});
});
