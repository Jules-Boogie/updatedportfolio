const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const projectSchema = new Schema ({
    Title: {type: String},
    Image: {type:String},
    Description:{type:String},
    deployedLink:{type:String},
    Gitlink:{type:String},
    Type:{type:String}
})

var Project = mongoose.model("Project", projectSchema)

module.exports = Project;