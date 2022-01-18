const db = require('./config/db')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//Test db connection

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes

app.use('/', require('./routes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
