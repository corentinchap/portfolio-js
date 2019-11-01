const mongoose = require('mongoose');
const { Schema } = mongoose;

const testimonialsSchema = new Schema({
    author: String,
    authorOccupation: String,
    projectUrl: String,
    quote: String,
    avatar: String
});

mongoose.model('testimonials', testimonialsSchema);
