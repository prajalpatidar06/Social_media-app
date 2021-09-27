const express = require('express')

const {database, db} = require('./database/models')
const {usersRoute} = require('./routes/users')
const {postsRoute} = require('./routes/posts')

const app = express()

app.use(express.urlencoded({force:true}))

app.use('/api/users' , usersRoute)
app.use('/api/posts' , postsRoute)

db.sync()
.then(()=>{
    app.listen(8383,()=>{
        console.log("server started at http://localhost:8383")
    })
})
.catch((err)=>{
    console.error(new Error('Could not start server'))
    console.error(err)
})