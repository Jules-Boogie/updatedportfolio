const db = require("../Models")

module.exports = {


    DisplayAll: function (req, res){
        db.Project.find(req.query)
        .then(dbResult => res.json(dbResult))
        .catch(err => res.status(422).json(error))

    },
    DisplayHomework: function(req,res){
        db.Project.find({Type:"homework"})
        .then(dbResult => res.json(dbResult))
        .catch(err => res.status(422).json(error))
    },
    DisplayProject: function(req,res){
        db.Project.find({Type:"project"})
        .then(dbResult => res.json(dbResult))
        .catch(err => res.status(422).json(error))
    },
    

};