const { getBlog, postBlog, deleteBlog } = require("../controller/blogController")
const router = require("express").Router()

router.get('/', getBlog)
router.post('/', postBlog)
router.delete('/:id', deleteBlog)

module.exports = router
