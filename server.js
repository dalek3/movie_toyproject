//모듈을 추출합니다.
var http = require('http');
var express = require('express');

//변수를 선언
var items = [{
    name: '스타워즈: 깨어난 포스',
    director: 'J.J. 에이브럼스',
    year: 2015,
    genre: 'SF'
}, {
    name: '세터데이 모닝',
    director: '스펜서 파슨스',
    year: 2012,
    genre: '공포'
}, {
    name: '볼라레',
    director: '조아킴 오리스트렐',
    year: 2012,
    genre: '코미디'
}, {
    name: '방과 후 미드나이터즈',
    director: '타케키요 히토시',
    year: 2012,
    genre: '애니메이션'
}, {
    name: '디어 헌터스',
    director: '에릭 빈스방거',
    year: 2012,
    genre: '모험'
}, {
    name: 'F*ckload of Scotch Tape',
    director: '줄리안 그랜트',
    year: 2012,
    genre: '범죄'
}];

//웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

app.get('/movie', function (request, response) {
    var output = '';
    output += '<!DOCTYPE html>';
    output += '<html>';
    output += '<head>';
    output += '    <title>Data HTML</title>';
    output += '	<style>';
    output += '     div {';
    output += '         margin: 10px 5px;';
    output += '     }';
    output += ' </style>';
    output += '</head>';
    output += '<body>';
    items.forEach(function (item) {
        output += '<div>';
        output += '    <h3>' + item.name + '</h3>';
        output += '    <p>' + ' 감독 : ' + item.director + '<br>' + ' 연도 : ' + item.year + '<br>' + ' 장르 : ' + item.genre + '</p>';
        output += '</div>';
    });
    output += '</body>';
    output += '</html>';
    response.send(output);
});
app.get('/movie/po', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.param('id'));
    if (isNaN(id)) {
        // 오류: 잘못된 경로
        response.send({
            error: '숫자를 입력하세요!'
        });
    } else if (items[id]) {
        // 정상
        var output = '';
        output += '<!DOCTYPE html>';
        output += '<html>';
        output += '<head>';
        output += '    <title>Data HTML</title>';
        output += '	<style>';
        output += '     div {';
        output += '         margin: 10px 5px;';
        output += '     }';
        output += ' </style>';
        output += '</head>';
        output += '<body>';
        output += '<div>';
        output += '    <h3>' + items[id].name + '</h3>';
        output += '    <p>' + ' 감독 : ' + items[id].director + '<br>' + ' 연도 : ' + items[id].year + '<br>' + ' 장르 : ' + items[id].genre + '</p>';
        output += '</div>';
        output += '</body>';
        output += '</html>';
        response.send(output);
    } else {
        // 오류: 요소가 없을 경우
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

app.post('/movie', function (request, response) {
    // 변수를 선언합니다.
    var name = request.param('name');
    var director = request.param('director');
    var year = Number(request.param('year'));
    var genre = request.param('genre');

    var item = {
        name: name,
        director: director,
        year: year,
        genre: genre
    };

    // 데이터를 추가합니다.
    items.push(item);

    // 응답합니다.
    response.send({
        message: '데이터를 추가했습니다.',
        data: item
    });
});


//웹서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});