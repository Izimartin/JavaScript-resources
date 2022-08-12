const express = require('express')
const path = require('path')
require('./db/mongoose')

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

const app = express()
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)



// server static assets if in prduction
if(process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('client/build'))
  
  // create route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`)
})