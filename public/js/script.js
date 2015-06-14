$(function () {
	var $container = $('.grid');

	$('.grid-item').imagesLoaded(function () {
		$container.isotope({ });
	});
	$('#myModal').on('hidden.bs.modal',function(){
		$(this).removeData('bs.modal')
	});	

	  // like_count
  $(document).on("click", "a.like_count", function() {
    return false;
  });

  $(document).on("click", "a.dislike_count", function() {
    return false;
  });
  // movie
  $(document).on("click","a.like", function() {
      //$code = $(this).attr('id');
      //check_movie("like", $code);
      $(this).removeClass('like').addClass('liked');

      /*$obj =  $(".like_count[id='"+$code+"']");
      $obj.text(parseInt($obj.text()) + 1);*/

    return false;
  });

  $(document).on("click", "a.liked", function() {
      //$code = $(this).attr('id');
      //check_movie("like", $code);
      $(this).removeClass('liked').addClass('like');

     /* $obj =  $(".like_count[id='"+$code+"']");
      $obj.text(parseInt($obj.text()) - 1);*/

    return false;
  });

  $(document).on("click", "a.dislike", function() {
      //$code = $(this).attr('id');
      //check_movie("dislike", $code);
      $(this).removeClass('dislike').addClass('disliked');

      //$obj =  $(".dislike_count[id='"+$code+"']");
      //$obj.text(parseInt($obj.text()) + 1);

    return false;
  });

  $(document).on("click", "a.disliked", function() {

      //$code = $(this).attr('id');
      //check_movie("dislike", $code);
      $(this).removeClass('disliked').addClass('dislike');

      //$obj =  $(".dislike_count[id='"+$code+"']");
      //$obj.text(parseInt($obj.text()) - 1);

    return false;
  });
});