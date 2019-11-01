const mongoose = require('mongoose');

const Testimonials = mongoose.model('testimonials');


module.exports = (app) => {
       
    // GET project
    app.get('/api/testimonials',async function (req, res, next) {
        Testimonials.find({}, async function(err, docs) {
            if (!err){ 
                await res.send(docs)
            } else {res.status(422).send(err)}
        });
    })

};
