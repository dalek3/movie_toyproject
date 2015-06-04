//모듈을 추출합니다.
var http = require('http'),
    express = require('express');

//웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

app.get('/register.html', function (request, response) {
    var output = '';
    output += '<form action="/" class="form-horizontal" method="post">'
    output += '<div class="form-group">'
    output += '<div class="header">'
    output += '<h2>Sign Up</h2>'
    output += '</div>'
    output += '<div class="content">'
    output += '<label for="email">E-mail</label>'
    output += '<input type="email" class="form-control" id="useremail" placeholder="Email" required/>'
    output += '<label>Password</label>'
    output += '<input type="password" class="form-control" id="password" placeholder="Password" />'
    output += '<label>Password Check</label>'
    output += '<input type="password" class="form-control" id="password2" placeholder="Password Check">'
    output += '</div>'
    output += '<div class="footer">'
    output += '<button type="submit" class="btn btn-primary">Sign Up</button>'
    output += '</div>'
    output += '</div>'
    output += '</div>'
    output += '</form>'
    response.send(output);
});

app.get('/login.html', function (request, response) {
    var output = '';
    output += '   <form action="/" method="post" class="form-horizontal">'
    output += '       <div class="form-group">'
    output += '               <div class="header">'
    output += '                   <h2>Login</h2>'
    output += '               </div>'
    output += '                    <div class="content">'
    output += '                   <label>E-mail</label>'
    output += '                   <input type="email" class="form-control" id="useremail" placeholder="Email" />'
    output += '                   <label>Password</label>'
    output += '                   <input type="password" class="form-control" id="password" placeholder="Password" />'
    output += '                   <input type="checkbox" id="remember-me" value="1" />'
    output += '                   <label class="string optional" for="user_remember_me">기억하기</label>'
    output += '               </div>'
    output += '                <div class="footer">'
    output += '                   <button type="submit" class="btn btn-primary">Login</button>'
    output += '               </div>'
    output += '           </div>'
    output += '       </div>'
    output += '   </form>'
    response.send(output);
});

//웹서버를 실행합니다.
var server = app.listen(52273, function () {
    console.log('Server Running at ' + server.address().port);
});
