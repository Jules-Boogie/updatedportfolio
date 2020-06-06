const db = require("../Models")

module.exports = {


    DisplayAll: function (req, res){
        db.Skill.find(req.query)
        .then(dbResult => res.json(dbResult))
        .catch(err => res.status(422).json(error))

    },


};