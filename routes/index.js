//모듈을 추출합니다.
var mysql = require('mysql');

//데이터베이스와 연결합니다.
var connection = mysql.createConnection({
    user: 'root',
    password: '1q2w3e',
    database: 'movie' //연결할 데이터베이스
});

exports.index = function(req, res){
  res.render('index');
};

exports.registerForm = function(req, res){
  res.render('register-form');
};

exports.loginForm = function(req, res){
	res.render('login-form');
}

exports.register = function(req, res){
  res.render('register',{
      useremail : req.body.useremail,
      password : req.body.password,
      password2 : req.body.password2});
};

exports.login = function(req, res){
	res.render('login',{
      useremail : req.body.useremail,
      password : req.body.password});
}

exports.recommend = function(req, res){
	res.render('recommend');
}

exports.mv = function(req, res){
	res.render('mv');
}

//DB 조회 -json으로 변환 10개씩
exports.load = function(req, res) {
    connection.query('SELECT * FROM movie', function(err, rows) {
        res.send(rows);
    });
};
                         