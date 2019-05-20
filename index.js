// Load local env. variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Image');
require('./models/Project');
require('./services/passport');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true});



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


//OAuth requirement
app.use(passport.initialize());
app.use(passport.session());



// Mutler Image upload requirement
app.use('/uploads', express.static('uploads'));
app.use('/image', require('./routes/imageRoutes'));

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

var server = app.listen(PORT, function() {
    console.log('Express server listening on port ' + server.address().port);
  });
  server.timeout = 1000;