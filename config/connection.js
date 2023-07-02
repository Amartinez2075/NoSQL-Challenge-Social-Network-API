// Import the Mongoose library
const mongoose = require('mongoose');

// Connect to the MongoDB database using the provided MONGODB_URI environment variable
// If the environment variable is not defined, it will connect to 'mongodb://localhost/social-network-api' by default
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: true,  // Enable the use of findOneAndUpdate() instead of deprecated method findAndModify()
  useUnifiedTopology: true,  // Enable the new unified topology engine
});

// Set the debug mode of Mongoose to true
// This will print the executed MongoDB operations to the console, providing valuable information for debugging purposes
mongoose.set('debug', true);

// Export the connection object to be used in other parts of the application
module.exports = mongoose.connection;