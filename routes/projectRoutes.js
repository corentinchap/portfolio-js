const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Project = mongoose.model('projects');


module.exports = (app) => {
    
     
    app.get('/api/projects',async function (req, res, next) {
        try{
            Project.find({}, async function(err, projects){
                if(err) next(err);
                await res.send(projects);
            });
        } catch(err){
            res.send(err);
        }
      })
    
    app.post('/api/projects', async (req, res) => {
        const {name, date, body, tags} = req.body;
       
        const project = new Project({
            name,
            date,
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
