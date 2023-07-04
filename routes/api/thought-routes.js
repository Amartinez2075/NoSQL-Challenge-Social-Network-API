const router = require('express').Router();
const {
    getAllThoughts, // Get all thoughts from the database and send them back as JSON data
    getThoughtById, // Get a single thought by its _id and populated thought and friend data and send it back as JSON data
    createThought, // Create a new thought in the database and send it back as JSON data
    updateThought, // Update a thought by its _id and send it back as JSON data
    deleteThought, // Delete a thought by its _id and send it back as JSON data
    addReaction, // Add a new reaction to a thought and send it back as JSON data
    deleteReaction // Remove a reaction from a thought and send it back as JSON data
} = require('../../controllers/thought-controller'); // Import the functions from the thought-controller.js file

// /api/thoughts
router
.route('/')
  .get(getAllThoughts) // Get all thoughts from the database and send them back as JSON data
  .post(createThought); // Create a new thought in the database and send it back as JSON data

// /api/thoughts/:id
router
  .route('/:id') // Get a single thought by its _id and populated thought and friend data and send it back as JSON data
  .get(getThoughtById) // Get a single thought by its _id and populated thought and friend data and send it back as JSON data
  .put(updateThought) // Update a thought by its _id and send it back as JSON data
  .delete(deleteThought); // Delete a thought by its _id and send it back as JSON data

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions') // Add a new reaction to a thought's reaction array field
  .post(addReaction); // Add a new reaction to a thought and send it back as JSON data

// /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId') // Remove a reaction from a thought's reaction array field
  .delete(deleteReaction); // Remove a reaction from a thought and send it back as JSON data

  module.exports = router;

