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
    ],
    order: Number
});

mongoose.model('skillsets', skillsetsSchema);
