//모듈을 추출합니다.
var mysql = require('mysql');

//데이터베이스와 연결합니다.
var connection = mysql.createConnection({
	user: 'root',
	password: '1q2w3e',
	database: 'movie',
	debug: true
});

//DB 조회 -json으로 변환 10개씩
var start = 0;
var offset =10;//item per page
var page = 1
/*(Math.random()*10).toFixed(0);
if (page>3) {
	page=(Math.random()*10).toFixed(0)
}
else{*/
	exports.index = function(req, res){
		start = (page-1) * offset;
			connection.query('SELECT name, imgpath FROM movie LIMIT ?, ?', [start, offset] , function(err, rows) {
				res.render('index',{row: rows});
			});
	};
//}

exports.movie = function(req, res){
	connection.query('SELECT  *  FROM movie WHERE name= ?', [req.params.name], function(err, row) {
		res.render('movie', {row: row[0]});
	});
}

exports.registerForm = function(req, res){
	res.render('register-form');
};

exports.loginForm = function(req, res){
	res.render('login-form');
}

exports.register = function(req, res){
	 var info = {
		username: req.body.username,
		password: req.body.password,
		password2: req.body.password2
	}
	connection.query('SELECT * FROM movieinfo WHERE username = ?', info.username, function (err,results) {
		if (results[0] !== undefined) {
			console.log("이미 가입 되어 있습니다.");
			res.redirect('/register'); 
		}
		else{
			if(info.password === info.password2) {
				//전부 맞을때 sql 입력
				connection.query('INSERT INTO  movieinfo SET username = ?, password = ?',[info.username , info.password], function (err) {
					console.log("가입되었습니다. 환영합니다");
					//exports.index다시 실행될때 변수로 넣기 위해 선언
					req.session.username = info.username;
					//index를 다시 띄움
					res.redirect(req.session.username);
				});
			}
			else{
				 //입력 비밀번호가 다를때
				console.log("비밀번호가 다릅니다.");
				res.redirect('/register'); 
			}
		}
	});
};

exports.login = function(req, res){
	connection.query('SELECT * FROM movieinfo WHERE username = ?', [req.body.username], function (err, results) {
		if (results[0] !== undefined) {
			if (results[0].password === req.body.password) {
				console.log("로그인 가능합니다.");
				//exports.index다시 실행될때 변수로 넣기 위해 선언
				req.session.username = results[0].username;
				//index를 다시 띄움
				res.redirect(req.session.username);
			}
			else {
					console.log("비밀번호를 다르게 입력하였습니다.");
					res.redirect('/login'); 
			}
		}
		else {
				console.log("가입되어 있지 않습니다.");
				res.redirect('/login'); 
		}
	});
}

exports.loginOk = function(req, res){
	connection.query('SELECT name, imgpath FROM movie LIMIT ?, ?', [start, offset] , function(err, rows) {
		res.render('login',{
			username: req.session.username,
			row: rows
		});
	});
}

exports.userinfoform = function (req, res) { //좋아요 영화 쿼리
    //var favorlite;
    //var hatelist;
	connection.query('SELECT * FROM movieinfo WHERE username = ?', [req.session.username], function (err, data) {
		console.log(data);
		res.render('user-info-form', {
		  	username: req.session.username
		     	//result: favorate,
		     	//result2: hate
		     });
	});
};

exports.passwordchangeform = function (req, res) {
    res.render('password');
};

exports.passwordchange = function (req, res) {
	var data = req.session.username;
	if (req.body.confirm === req.body.new) {
		connection.query('UPDATE movieinfo SET password = ? WHERE username = ?', [req.body.new, data]);
			console.log("비밀번호 변경 완료");
			res.redirect('/'+data+'/profile'); 
	}
	else {
		console.log("변경 하고자 하는 비밀번호가 맞지 않습니다.");
		res.redirect('/'+data+'/profile'); 
	}
};

exports.withdrawalform = function (req, res) {
    res.render('withdrawal');
}

exports.withdrawal = function (req, res) {
	var data = req.session.username;
	connection.query('DELETE from movieinfo WHERE username = ?', data,function (err){
		console.log(data);
		res.redirect('/'); 
	});
}
// 안됨
exports.logout = function(req, res){
	console.log('로그아웃');
	req.session.destroy(function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    		res.redirect('/');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  	});  
}
											 