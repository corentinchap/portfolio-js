const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Project = mongoose.model('project');

module.exports = (app) => {
    
    app.get('/api/projects', requireLogin, async (req, res) => {
        mongoose.model('projects').find(function(err, projects){
            res.send(projects);
        })
    });

    app.post('/api/projets', requireLogin, (req, res) => {
        const {name, date, body, tags} = req.body;

        const project = new Project({
            name,
            date,
            body,
            tags
        })
    });

};
