const router = require('express').Router();
const {
    getAllUsers, // Get all users from the database and send them back as JSON data
    getUserById, // Get a user by ID and populated thought and friend data and send it back as JSON data
    createUser, // Create a new user in the database and send it back as JSON data
    updateUser, // Update a user by ID and send it back as JSON data
    deleteUser, // Delete a user by ID and send it back as JSON data
    addFriend, // Add a friend to a user's friend list and send it back as JSON data
    deleteFriend // Delete a friend from a user's friend list and send it back as JSON data
  } = require("../../controllers/user-controller");

// /api/users
router.route('/').get(getAllUsers).post(createUser); 
  //Get all users from the database and send them back as JSON data |||Create a new user in the database and send it back as JSON data

// /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
  // Get a single user by its _id and populated thought and friend data and send it back as JSON data
  // Update a user by its _id and send it back as JSON data
   // Delete a user by its _id and send it back as JSON data

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);
  // Add a new friend to a user's friend list and send it back as JSON data
  // Remove a friend from a user's friend list and send it back as JSON data

module.exports = router; // Export the router so it can be used by other modules