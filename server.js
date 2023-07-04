const express = require('express')
const db = require('./config/connection')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3001

// express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// Establishes a connection to the database
const db = require('./config/connection')

// Imports the routes for the API
const routes = require('./routes')

// Creates an instance of the Express application
const app = express()

// Specifies the port number to listen on
const PORT = process.env.PORT || 3001

// Middleware that allows the application to parse JSON data
app.use(express.json())

// Middleware that allows the application to parse URL-encoded data
app.use(express.urlencoded({ extended: true }))

// Mounts the routes defined in the 'routes' module
app.use(routes)

// Event handler for when the database connection is successfully opened
db.once('open', () => {
  // Starts the Express server and listens on the specified port
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})
