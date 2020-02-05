var createError = require("http-errors");
var cookieSession = require("cookie-session");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var register = require("./routes/register");
var login = require("./routes/login");
var admin = require("./routes/admin");
var certificate_detail = require("./routes/certificate-detail");
var add_college = require("./routes/add-college");
var add_workshop = require("./routes/add-workshop");
var create_certificate = require("./routes/create-certificate");
var dashboard = require("./routes/dashboard");
var my_certificate = require("./routes/my-certificate");

//var facebooklogin = require('./routes/facebooklogin');
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cookieSession({
    name: "session",
    keys: ["kaushal"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.use("/", indexRouter);
app.use("/register", register);
app.use("/login", login);
app.use("/admin", admin);
app.use("/certificate-detail", certificate_detail);
app.use("/add-college", add_college);
app.use("/add-workshop", add_workshop);
app.use("/create-certificate", create_certificate);
app.use("/dashboard", dashboard);
app.use("/my-certificate", my_certificate);

//app.use('/facebooklogin',facebooklogin);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
