// Importing the required module 'express' and assigning the Router class to the variable 'router'
const router = require('express').Router()

// Importing the 'api' module/file that contains the API routes
const apiRoutes = require('./api')

// Mounting the imported 'apiRoutes' module on the '/api' path
router.use('/api', apiRoutes)

// Middleware function for handling 404 errors
router.use((req, res) => 
  res.status(404).send('<h1>404 Error! Prepare for Hell!!!</h1>')
})

// Exporting the router object so that it can be used in other parts of the application
module.exports = router;
