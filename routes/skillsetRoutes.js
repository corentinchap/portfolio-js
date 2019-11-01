const mongoose = require('mongoose');

const Skillsets = mongoose.model('skillsets');


module.exports = (app) => {
       
    // GET project
    app.get('/api/skillsets',async function (req, res, next) {
        Skillsets.find({}, async function(err, docs) {
            if (!err){ 
                await res.send(docs)
            } else {res.status(422).send(err)}
        });
    })

    
};
