const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: String,
    date: Date,
    body: String,
    tags: ['grav-cms', 'front-end']
});

mongoose.model('projects', projectSchema);