const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../model/user")

exports.getUser = async (req, res) => {
    try {
        
        const data = await User.find(req.body)
        return res.json({ errors: false, data: data })

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postUser = async (req, res) => {
    try {
        //user availability check
        const userAvbl = await User.findOne({ email: req.body.email })
        if (userAvbl) return res.status(500).json({ errors: true, message: "User Already Exist" })

        const sault = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password, sault)

        const data = await User.create(req.body)
        return res.json({ errors: false, data: data })

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}


exports.login = async (req, res) => {
    try {
        //user availability check
        const userAvbl = await User.findOne({ email: req.body.email })
        if (!userAvbl) return res.status(500).json({ errors: true, message: "User Or password is invalid" })

        //pasword check
        const passCheck = await bcrypt.compare(req.body.password, userAvbl.password)
        if (!passCheck) return res.status(500).json({ errors: true, message: "User Or password is invalid" })

        //token
        const token = await jwt.sign({ _id: userAvbl.id }, process.env.SEC)
        return res.json({ errors: false, data: { token: token, user: userAvbl } })

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}