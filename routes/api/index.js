const router = require('express').Router()
const userRoutes = require('./user-routes')
const thoughtRoutes = require('./thought-routes')

// Create a new router instance using the Router object from the express package
// This router will be used to define and handle routes for this specific module

// Import the user-routes.js module, which contains routes related to user operations
const userRoutes = require('./user-routes')

// Import the thought-routes.js module, which contains routes related to thought operations
const thoughtRoutes = require('./thought-routes')

// Use the `/users` prefix for all routes defined in the userRoutes module
router.use('/users', userRoutes)

// Use the `/thoughts` prefix for all routes defined in the thoughtRoutes module
router.use('/thoughts', thoughtRoutes)

// Export the router so it can be used by other modules
module.exports = router
