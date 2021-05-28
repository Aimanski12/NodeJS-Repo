const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


// file upload
const multer = require('multer')
const {
    db
} = require('./models/task')
const upload = multer({
    dest: 'images/test',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.endsWith('pdf')) {
            return cb(new Error('Please upload a PDF file'))
        }
        cb(undefined, true)
    }
})


app.post('/upload', upload.single('upload'), (req, res) => {
    res.send({
        test: 'testing'
    })

}, (error, req, res, next) => {
    res.status(404).send({
        error: error.message
    })
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})