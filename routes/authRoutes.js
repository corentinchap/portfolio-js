const passport = require('passport');
const mongoose = require('mongoose');


module.exports = (app) => {
    
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    
    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/admin',
        failureRedirect: '/fail'
    }));

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/check_auth', (req, res) => {
        if(req.user && req.user.googleId == process.env.GOOGLE_PERSONAL_ID)
            res.send(true);
        else
            res.send(false);
    });

    app.get('/api/projects', (req, res) => {
        mongoose.model('projects').find(function(err, projects){
            res.send(projects);
        })
    });

    app.get('/api/logout', (req, res) => {
         req.logout();
         res.send(req.user);
    });
};
