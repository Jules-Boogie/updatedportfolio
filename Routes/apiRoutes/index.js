const router = require("express").Router()
const allRoutes = require("./apiRoutes")



router.use("/portfolio", allRoutes)

module.exports = router;