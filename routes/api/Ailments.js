const router = require("express").Router();
const ailmentController = require ("../../controllers/ailmentController")

router.route("/headache")
    .get(ailmentController.findHeadache)

router.route("/headache/pharm")
    .get(ailmentController.findHeadachePharm)

router.route("/headache/nopharm")
    .get(ailmentController.findHeadacheNoPharm)
    
router.route("/backpain")
    .get(ailmentController.findBackpain)

router.route("/backpain/pharm")
    .get(ailmentController.findBackpainPharm)

router.route("/backpain/nopharm")
    .get(ailmentController.findBackpainNoPharm)


router.route("/")
.get(ailmentController.findAll)

router.route("/")
.post(ailmentController.create)

router.route("/:email")
.get(ailmentController.findByEmail)


module.exports = router
