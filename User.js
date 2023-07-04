const {Schema, model} = require('mongoose'); // Import the Mongoose library

const UserSchema = new Schema( // Schema constructor
    {
        username: {
            type: String, // String type
            unique: true, // Unique value
            required: 'Username is required', // Required
            trim: true, // Trim whitespace
        },
        email: {
            type: String, // String type
            required: 'Email address is required', // Required
            unique: true, // Unique value
            // Use regex to validate correct email address format
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address'], // Match a string of any character, followed by an @ symbol, followed by any character, followed by a period, followed by any character
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId, // Expecting an ObjectId
                ref: 'Thought', // Reference the Thought model
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId, // Expecting an ObjectId
                ref: 'User', // Reference the User model
            },
        ],
    },
    {
        toJSON: {
            virtuals: true, // Enable virtual's
        },
        id: false, // Disable virtual's
    }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Create the User model using the UserSchema
const User = model('User', UserSchema);

// Export the User model
module.exports = User;