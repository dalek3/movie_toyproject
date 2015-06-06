$(function () {
    var $container = $('.modal-body');

    function selectData() {
        // Ajax를 수행합니다.
        $.getJSON('/movie', function (data) {
            var html = '';
            $.each(data, function (index, item) {
                if(index === 0){
                    html += '<a href="#" id=test class="thumbnail col-md-5 col-sm-5 pull-left">';
                    html += '<img src="' + item.imgpath + '"style="width: 100%; height: auto;">';
                    html += '</a>'
                    $('#title').html(item.name)
                    $('#director').html(item.director)
                    $('#actor1').html(item.actor1)
                    $('#year').html(item.year)
                }

            });
            $container.html(html);
        });
    }
    selectData();
});