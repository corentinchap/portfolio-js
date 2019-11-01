const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillsetsSchema = new Schema({
    title: String,
    text: String,
    imageUrl: String,
    techs: [
        {
            logoUrl: String,
            alt: String
        }
    ]
});

mongoose.model('skillsets', skillsetsSchema);
