// Load local env. variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const fs = require('fs');


// Loop to require all models
var models_path = __dirname + '/models'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file)
})

require('./services/passport');

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true});

const app = express();

// for parsing application/json
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [
            process.env.COOKIE_KEY
        ]
    })
);


app.use(function(req, res, next) {
    if(process.env.NODE_ENV === 'dev'){
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    }
    else
    {
        res.header("Access-Control-Allow-Origin", "*");
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//OAuth requirement
app.use(passport.initialize());
app.use(passport.session());


//Mutler Image upload requirement
app.use('/uploads', express.static('uploads'));
app.use('/image', require('./routes/imageRoutes'));

require('./routes/authRoutes')(app);
require('./routes/projectRoutes')(app);
require('./routes/testimonialRoutes')(app);
require('./routes/skillsetRoutes')(app);



if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'preproduction'){
    //servce prod assets
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
else{
    //mongoose.set('debug', true)
}

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, function() {
    console.log('Express server listening on port ' + server.address().port);
  });
  server.timeout = 1000;