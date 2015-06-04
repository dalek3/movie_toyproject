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