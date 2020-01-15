const mongoose = require('mongoose');
const Project = mongoose.model('projects');


module.exports = (app) => {
       
    // GET project
    app.get('/api/projects',async function (req, res, next) {
        Project.find({}, async function(err, docs) {
            if (!err){ 
                await res.send(docs)
            } else {res.status(422).send(err)}
        });
    })
    
};
