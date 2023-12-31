
const express = require("express")
const { connection } = require("./controllers/connection")
const { UserRouter } = require("./routes/user.route")
const { BlogsRouter } = require("./routes/blogs.router")
const {PatchBlogsRouter} = require("./routes/Patch.route");
const {GetBlogsRouter}=require("./routes/Get.route")
const {auth}=require("./middleware/auth.middleware");
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())
 
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/user", UserRouter);
app.use("/employees", GetBlogsRouter)
app.use("/employee", PatchBlogsRouter);
// app.use(auth);
app.use("/employee", BlogsRouter )

 
app.listen(process.env.PORT , async () => {
    try {
        await connection
        console.log("connected to DB !")
    } catch (error) {
        console.log(error)
    }
    console.log("App running on port " + process.env.PORT + "...")
})



