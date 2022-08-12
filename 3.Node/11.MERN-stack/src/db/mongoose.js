const mongoose = require('mongoose')

const db = require('../../config/keys').MongoDBUrl

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
  .then(res => {
    console.log('MongoDB Server is now connected')
  })
  .catch(err => {
    console.log(`Error ${err}`)
  })


// mongoose.connect(process.env.MongoDBUrl, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// })