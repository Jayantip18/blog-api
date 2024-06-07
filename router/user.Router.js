const {postUser,login,getUser} =require("../controller/userController")

const router = require("express").Router()

router.get('/',getUser)
router.post('/',postUser)
router.post('/login',login)

module.exports = router