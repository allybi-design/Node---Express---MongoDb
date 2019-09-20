const express = require('express');
const bodyParser = require("body-Parser");
const path = require('path');

const userRoutes = require("./routes/user")

const createError = require('http-errors');

const PORT = process.env.PORT || 3000

const app = express();

const mongoose = require("mongoose");

//use Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Set static folders
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(userRoutes)

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, ()=> {
  mongoose.connect("mongodb://localhost:27017/clubDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  });
  console.log(`Server running on http://localhost:${PORT}`)
})