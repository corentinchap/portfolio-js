const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    tags: [String],
    name: String,
    date: Date,
    description: String,
    images: [
        {
           url: String,
           titleUrl: String 
        }
    ],
    url: String,
    gitUrl: String
});

let model = mongoose.model('projects', projectSchema);

var item = new model({
    tags: ["cms integration", "custom theme"],
    name: "travel blog",
    date: new Date(),
    description: "build on top of grav, a flatfile CMS. I used a theme and customized it",
    images: [
        {url:"/images/abgefatzt-home.png", titleUrl: "abgefatz.de"},
        {url:"/images/abgefatzt-article.png", titleUrl: "abgefatz.de/blog"},
        {url:"/images/abgefatzt-dashboard.png", titleUrl: "abgefatz.de/admin"}
    ],
    url: "http://abgefatz.de",
    gitUrl: "https://github.com/corentinchap/phil-blog-grav"
})
var item2 = new model({
    tags: ["react", "node", "mongodb", "redux", "scss"],
    name: "this portfolio",
    date: new Date(),
    description: "this portfolio is made from scratch, I tried to not use 3rd party librairies when I could.",
    url: "",
    gitUrl: "https://github.com/corentinchap/portfolio-js"
})
// item.save();
// item2.save();