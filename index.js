const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
var ImageRouter = require('./routes/imageRoutes');
var bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true});

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', '*');  // enables all the methods to take place
    return next();
  });

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [
            keys.cookieKey
        ]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/uploads', express.static('uploads'));

app.use('/image', ImageRouter);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 

require('./routes/authRoutes')(app);
require('./routes/projectRoutes')(app);





if(process.env.NODE_ENV === 'production'){
    //servce prod assets
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);