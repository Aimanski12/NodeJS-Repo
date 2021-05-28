const mongoose = require('mongoose')

mongoose.connect(process.env.MongoDBUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})