    $(document).ready(function () {
        // 데이터를 보여주는 함수
            function selectData() {
                // Ajax를 수행합니다.
                $.getJSON('/movie', function (data) {
                    $(data).each(function (index, item) {
                        $('<img/>').attr('src', item.imgpath).appendTo('.grid-item');
                    });
                });
            }
            // 초기 화면에 데이터를 표시합니다.
            selectData();
        });