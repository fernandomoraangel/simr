'use strict';

var passport=require('passport'),
	mongoose=require('mongoose');

module.exports=function(){
	var User=mongoose.model('User');
//Definen cómo manejará passport la serialización de los usuarios
	passport.serializeUser(function(user,done){
		done(null,user.id);
	});

	passport.deserializeUser(function(id,done){
		User.findOne({
			_id:id
		//Objeto opcion de mongoose para asegurar que no recupera esos campos
		},'-password -salt',function(err,user){
			done(err,user);
		});
	});

require('./strategies/local.js')();
require('./strategies/google.js')();
};
