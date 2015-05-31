//모듈을 추출합니다.
var http = require('http'),
    express = require('express');

//웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);


//웹서버를 실행합니다.
var server = app.listen(52273, function () {
    console.log('Server Running at ' + server.address().port);
});