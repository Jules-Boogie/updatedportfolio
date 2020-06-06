const router = require("express").Router()

const projectcontroller = require("../../controllers/projectcontroller")
const skillcontroller = require("../../controllers/skillscontroller")


router
.route("/Projects")
.get(projectcontroller.DisplayAll)


router
.route("/Projects/project")
.get(projectcontroller.DisplayProject)

router
.route("/Projects/homework")
.get(projectcontroller.DisplayHomework)


router
.route("/skills")
.get(skillcontroller.DisplayAll)

module.exports = router;

