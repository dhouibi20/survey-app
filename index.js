const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoURI = require('./config/keys').mongoURI;
const cookieKey = require('./config/keys').cookieKey
require('./models/User'); //before
require('./services/passport'); //  excute

mongoose.connect(mongoURI,  { useNewUrlParser: true });

const app = express();


app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app); 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`running on Port ${port}`));


//mdh   tfouri5 