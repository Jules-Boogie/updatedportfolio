const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const skillsSchema = new Schema({

    link:{type:String},
    image:{type:String},
    skill:{type:String}

})

const Skill = mongoose.model("Skill", skillsSchema)

module.exports = Skill;