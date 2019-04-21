const mongoose = require('mongoose');


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
    /*
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
    */
};
