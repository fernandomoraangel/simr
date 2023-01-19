var passport=require('passport'),
	LocalStrategy=require('passport-local').Strategy,
	User=require('mongoose').model('User');

	module.exports=function(){
		passport.use(new LocalStrategy(function(username,password,done){
			//console.log(password+"password en local");
			User.findOne({
				username:username
			},function(err,user){
				if(err){
					return done(err);
				}
			if(!user){
				return done(null, false,{
					message:'Usuario o contraseña desconocida'
				});
			}
			if(!user.authenticate(password)){
				return done(null,false,{
					message:'Usuario o contraseña desconocida'
				});
			}
			return done(null,user);
			});
	}));
};