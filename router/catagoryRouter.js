const {postCatagory,getCatagory} =require("../controller/categoryController")

const router = require("express").Router()

router.get('/',getCatagory)
router.post('/',postCatagory)

module.exports = router