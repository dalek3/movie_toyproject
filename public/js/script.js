$(function () {
	var $container = $('.grid');

	$('.grid-item').imagesLoaded(function () {
		$container.isotope({ });
	});
	$('#myModal').on('hidden.bs.modal',function(){
		$(this).removeData('bs.modal')
	});	
    function is_login(){
        $.ajax({
            url : '/user/:username',
            type : 'GET',
            data : data
        });
    }

  // like_count
  $(document).on("click", "a.like_count", function() {
    return false;
  });

  $(document).on("click", "a.dislike_count", function() {
    return false;
  });
  // movie
  $(document).on("click","a.like", function() {
        $(this).addClass('like');
        $obj =  $(".like_count");
        $.getJSON('/count.json', function(data) {
          $.each(data, function(entryIndex, entry) {
            $obj.text(entry.like_count);  
          });
        });
    return false;
  });
});