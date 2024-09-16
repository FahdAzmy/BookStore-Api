const experess=require("express")
const app=experess()
const connectToDB=require("./config/bd")
const path=require('path')
require("dotenv").config();
const logger = require("./middlewares/logger")
const {notFound,errorHandler}=require("./middlewares/errors") 

connectToDB();
app.use(experess.json())
app.use(experess.static(path.join(__dirname,"images")))
app.use(experess.urlencoded({extended:false}))
app.use(logger)
app.set('view engine','ejs')
app.use("/api/books",require("./Routs/Books"))
app.use("/api/authors",require("./Routs/author"))
app.use("/api/auth",require("./Routs/auth"))
app.use("/api/users",require("./Routs/users"))
app.use("/api/uplaod",require("./Routs/uploed"))
app.use("/password",require("./Routs/password"))
app.use(notFound)
app.use(errorHandler)
const port=process.env.port ||3000
app.listen(port,console.log(`Server is running in ${process.env.NODE_ENV} mode on Port ${port}`))