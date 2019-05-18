const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

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
    
    // POST create / update new project
    app.post('/api/projects', (req, res) => {
        const {projectId, name, date, body, tags} = req.body;
        var exists = false;

        Project.findById(projectId, function(err,res) {
            if(err){res.status(422).send(err)}
            if(res !== null){
                exists = true;  
                console.log('does exists');          
            }
        });

        if(exists == true)
        {
            Project.findOneAndUpdate({name},{name, date, body, tags},function(err, doc){
                if(err){
                    res.status(422).send(err);
                }else{
                    res.send('updated successfully');
                }
            });
        }
        else{
            const project = new Project({
                name,
                date,
                body,
                tags
            });
      
            try {
                project.save();
                res.send('Project created successfully');
            } catch (err) {
                res.status(422).send(err);
            }
        }
       console.log('exists : ' + exists)
        
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
