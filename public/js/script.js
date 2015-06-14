 $(function () {
    var $container = $('.grid');

    $('.grid-item').imagesLoaded(function () {
      $container.isotope({ });
    });
    $('#myModal').on('hidden.bs.modal',function(){
      $(this).removeData('bs.modal')
    }); 
  });

  $is_login = false;

  function is_login() {
    $.ajax({
      type: "GET",
      url: "/api/login",
      dataType: "json",
      success: function(data) {
        $is_login = data[0].username;
      },
    });
  }

$(document).ready(function(){
   is_login();
  // like_count
  $(document).on("click", "a.like_count", function() {
    return false;
  });

  $(document).on("click", "a.dislike_count", function() {
    return false;
  });
  // movie
  $(document).on("click","a.like", function() {
      if($is_login){
        $(this).switchClass('like','liked');
        $obj =  $(".like_count");
        $.getJSON('/api/count', function(data) {
          $.each(data, function(entryIndex, entry) {
            $obj.text(entry.like_count);  
          });
        });
      }
      else{
        alert('로그인이 필요합니다.');
      }
    return false;
  });

  $(document).on("click", "a.liked", function() {
    if($is_login){
      $(this).switchClass('liked','like');
      $obj =  $(".like_count");
      $.getJSON('/api/discount', function(data) {
        $.each(data, function(entryIndex, entry) {
          $obj.text(entry.like_count);
        });
      });
      }
      else{
        alert('로그인이 필요합니다.');
      }
    return false;
  });

  $(document).on("click", "a.dislike", function() {
      $(this).removeClass('dislike').addClass('disliked');
      $obj =  $(".dislike_count");
      $.getJSON('/Dcount.json', function(data) {
        $.each(data, function(entryIndex, entry) {
          $obj.text(entry.dislike_count);
        });
      });
    return false;
  });

  $(document).on("click", "a.disliked", function() {

      $(this).removeClass('disliked').addClass('dislike');
      $obj =  $(".dislike_count");
      $.getJSON('/Ddiscount.json', function(data) {
        $.each(data, function(entryIndex, entry) {
          $obj.text(entry.dislike_count);
        });
      });
    return false;
  });
});