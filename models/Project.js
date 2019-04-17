const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: String,
    date: Date,
    thumbnail: { data: Buffer, contentType: String },
    body: String,
    tags: [String]
});

mongoose.model('projects', projectSchema);