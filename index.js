const express = require('express');
const app = express();

app.get('/',(res,req) => {
    res.send({bye: 'buddy'});
});
const PORT = process.env.PORT ;

app.listen(PORT);