//Definir entorno de desarrollo, no de producción
process.env.NODE_ENV=process.env.NODE_ENV ||'development';
//process.env.NODE_ENV=process.env.NODE_ENV ||'production';
var mongoose=require('./config/mongoose'),
	express = require('./config/express'),
	passport=require('./config/passport');
//Crear instancia del objeto db
var db=mongoose();
//Crear instancia del objeto express
var app=express();
//Crear instancia del objeto passport
var passport=passport();
app.listen(3000);
module.exports=app;
console.log('Servidor ejecutandose en http://localhost:3000');
