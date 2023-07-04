const express = require('express')
const db = require('./config/connection')
const routes = require('./routes')
// Creates an instance of the Express application
const app = express()
// Specifies the port number to listen on
const PORT = process.env.PORT || 3001

// express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)


// Event handler for when the database connection is successfully opened
db.once('open', () => {
  // Starts the Express server and listens on the specified port
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})
