const express = require('express')

// connect to the database
require('./db/mongoose')

// express
const app = express()

// PORTyou
const PORT = process.env.PORT

// routes
const userRouter = require('./routes/users')

app.use(express.json())
app.use(userRouter)


app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`)
})


// L8NgGa#123ShaV3Ry!D0m12  HeDataNow392

"mongodb+srv://testUser:1234qwer@cluster0.mk1hy.mongodb.net/test-app?retryWrites=true"