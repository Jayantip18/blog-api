const Catagory = require("../model/catagory")

exports.getCatagory = async (req, res) => {
    try {
        const data = await Catagory.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postCatagory = async (req, res) => {
    try {

        const data = await Catagory.create(req.body)
        return res.json({ errors: false, data: data })

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })

    }
}