const Blog = require("../model/blog")

exports.getBlog = async (req, res) => {
    try {
        const data = await Blog.find().populate('category').populate('user')
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postBlog = async (req, res) => {
    try {
        const data = await Blog.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const data = await Blog.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json({ errors: true, message: "Blog not found" })
        }
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}
