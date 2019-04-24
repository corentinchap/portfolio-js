const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Project = mongoose.model('projects');


module.exports = (app) => {
    
    // get project
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
    
    // create new project
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

    // delete project
    app.post('/api/projects/delete/:id', async (req, res) => {
        const id = mongoose.Types.ObjectId(req.params.id);
        
        Project.deleteOne({_id : id}, function(err) {
            if(err)
                return res.status(500).send(err);
        });
        
        const response = {
            message: "Project successfully deleted",
            id: id
        };

        return res.status(200).send(response);

    });

    
};
