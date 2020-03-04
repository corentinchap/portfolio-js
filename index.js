// Load local env. variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');

// Loop to require all models
var models_path = __dirname + '/models'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file)
})


mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true});

const app = express();

//app.use(secure);

// for parsing application/json
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


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
    mongoose.set('debug', true)
}

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, function() {
    console.log('Express server listening on port ' + server.address().port);
  });
  server.timeout = 1000;