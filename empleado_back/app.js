var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database")
<<<<<<< HEAD:proyecto_back/app.js
var auth = require("./auth/main_auth")
var cors = require('cors')



// var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
=======
var auth = require("./auth/main.auth")

>>>>>>> 9b7156f4288950c8d69a6b2d8820e6af34ba4d90:empleado_back/app.js
var empleadosRouter = require('./routes/empleados.router');
var usuariosRouter = require('./routes/usuario.router');

var app = express();

<<<<<<< HEAD:proyecto_back/app.js
// view engine setup


=======
>>>>>>> 9b7156f4288950c8d69a6b2d8820e6af34ba4d90:empleado_back/app.js
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD:proyecto_back/app.js
app.use(cors())
//Mongo connection
=======
//conexion mongo
>>>>>>> 9b7156f4288950c8d69a6b2d8820e6af34ba4d90:empleado_back/app.js
database.mongoConnect();
app.use('/usuarios', usuariosRouter);

<<<<<<< HEAD:proyecto_back/app.js
=======
//router
app.use('/usuarios', usuariosRouter);
app.use('/empleados', empleadosRouter);
app.use(auth);
>>>>>>> 9b7156f4288950c8d69a6b2d8820e6af34ba4d90:empleado_back/app.js

//router
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/empleados', empleadosRouter);
app.use(auth)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
