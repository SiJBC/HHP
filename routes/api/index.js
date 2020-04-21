const router = require("express").Router();
const ailmentRoutes = require("./Ailments")

router.use("/ailments", ailmentRoutes)

module.exports = router 