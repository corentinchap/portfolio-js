const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
var fs = require('fs');

const Project = mongoose.model('projects');

module.exports = (app) => {
    
    app.get('/api/projects', async (req, res) => {
        Project.find(function(err, projects){
            res.send(projects);
        })
    });

    app.post('/api/projets', requireLogin, async (req, res) => {
        const {name, date, thumbnailPath, body, tags} = req.body;
        var thumbnail;
        thumbnail.data = fs.readFileSync(thumbnailPath);
        thumbnail.type = 'image/png';

        const project = new Project({
            name,
            date,
            thumbnail,
            body,
            tags
        });
  
        try {
            await project.save();
            res.send(true);
          } catch (err) {
            res.status(422).send(err);
          }
    });

};
