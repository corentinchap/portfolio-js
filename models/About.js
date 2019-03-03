const mongoose = require('mongoose');
const { Schema } = mongoose;

const aboutPageSchema = new Schema({
    presentationText: String,
    social: [
        {
            name: String,
            url: String,
            iconPath: String
        }
    ],
});

mongoose.model('about', aboutPageSchema);