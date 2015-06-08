//모듈을 추출합니다.
var mysql = require('mysql');

//데이터베이스와 연결합니다.
var connection = mysql.createConnection({
	user: 'root',
	password: '1q2w3e',
	table: 'movieinfo',
	database: 'movie' //연결할 데이터베이스
});

//DB 조회 -json으로 변환 10개씩
var start = 0;
var offset =10;//item per page
var page = 1;
exports.index = function(req, res){
	start = (page-1) * offset;
		connection.query('SELECT name, imgpath FROM movie LIMIT ?, ?', [start, offset] , function(err, rows) {
			console.log("rows : " + JSON.stringify(rows));
			res.render('index',{row: rows});
		});
};

exports.registerForm = function(req, res){
	res.render('register-form');
};

exports.loginForm = function(req, res){
	res.render('login-form');
}

exports.register = function(req, res){
	 var info = {
		usermail: req.body.useremail,
		password: req.body.password,
		password2: req.body.password2
	}
	 connection.query('SELECT * FROM movieinfo WHERE useremail = ?', [req.body.useremail], function (err, results, fields) {
		 //이미 
		 if (results[0] != undefined) {
			 console.log(typeof(results));
			 console.log("이미 가입 되어 있습니다.");//
		 }
		 else {
			 if (info.password == info.password2) {
				 //전부 맞을때 sql 입력
				connection.query('INSERT INTO  movieinfo SET useremail = ?, password = ?, password2 = ?',
				 [info.usermail, info.password, info.password2], function (err) {
					if (err) {
						throw err; 
					 }
					 console.log("가입되었습니다. 환영합니다");
					 //index를 다시 띄움
						 res.redirect('/');
				});
			}
			 else{
				 //입력 비밀번호가 다를때
				console.log("비밀번호가 다릅니다.");
				 console.log(results);
			}
		 }
	 });
};

exports.login = function(req, res){
	connection.query('SELECT * FROM movieinfo WHERE useremail = ?', [req.body.useremail], function (err, results, fields) {
		//console.log(req);
		if (results[0] != undefined) {
				console.log(results[0].password);
				console.log(req.body.password);
				if (results[0].password == req.body.password) {
						console.log("로그인 가능합니다.");
						//exports.index다시 실행될때 변수로 넣기 위해 선언
						req.session.useremail = req.body.useremail;
						//index를 다시 띄움
						res.redirect('/user');
				}
				else {
						console.log("비밀번호를 다르게 입력하였습니다.");
				}
		}
		else {
				console.log("가입되어 있지 않습니다.");
		}
	});
}
exports.loginOk = function(req, res){
	res.render('login');
}

exports.recommend = function(req, res){
	start = (page-1) * offset;
		connection.query('SELECT name, imgpath FROM movie LIMIT ?, ?', [start, offset] , function(err, rows) {
			console.log("rows : " + JSON.stringify(rows));
			res.render('recommend',{row: rows});
		});
}

exports.movie = function(req, res){
	connection.query('SELECT  *  FROM movie WHERE name=?', [req.params.name], function(err, row) {
		console.log(row);
		console.log(req.params.name);
		res.render('movie', {row: row[0]});
	});
}

												 