require("dotenv/config")
const mongoose = require("mongoose")
const userRoute = require("./router/user.Router")
const categoryRouter = require("./router/catagoryRouter")
const blogRouter = require("./router/blogRouter")
const express = require("express")
const app = express()

app.use(express.json())
app.use("/api/user",userRoute)
app.use("/api/category",categoryRouter)
app.use("/api/blog",blogRouter)
app.get('/',(req,res)=>{
    res.send("home")
})

app.listen(process.env.PORT)

async function db (){
try {
    const res = await mongoose.connect(process.env.DB)
    // const data = await res.STATES
    console.log(res.STATES.connected);

} catch (error) {
    return res.status(500).json({ errors: true, message: error.message })   
}    
}
db()