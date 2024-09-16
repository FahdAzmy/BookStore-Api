const http=require("http")
const books=[
    {
        id:1,
        name:"book1"
    },
    {
        id:2,
        name:"book2"
    },
    {
        id:3,
       name:"book3"
    },
    {
        id:4,
        name:"book4"
    }
]
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("<h1>Welcome to NODE js</h1>")
        res.end()
    }if(req.url==="/api/books"){
        res.write(JSON.stringify (books))
        res.end()
    }
})
const port=5000
server.listen(port,()=>console.log(`Server is running on Port ${[port]}`))