$(function () {
    var $container = $('.modal-body');

    function selectData() {
        // Ajax를 수행합니다.
        $.getJSON('/movie', function (data) {
            var html = '';
            $.each(data, function (index, item) {
                if(index === 0){
                    html += '<a href="#" id=test class="thumbnail col-md-4 col-sm-4 col-xs-4 pull-left">';
                    html += '<img src="' + item.imgpath + '"style="width: 100%; height: auto;">';
                    html += '</a>'
                    $('#title').html('<h4>'+item.name+'('+item.year+') </h4>')
                    $('#director').html( '감독: '+item.director)
                    $('#genre').html('장르: '+item.genre1+', '+item.genre2+', '+item.genre3+', '+item.genre4)
                    $('#actor').html('배우: '+ item.actor1+', '+item.actor2+', '+item.actor3+', '+item.actor4)
                    $('#blank').html( "1")
                    $('#story').html( item.stroy)
                }

            });
            $container.html(html);
        });
    }
    selectData();
});