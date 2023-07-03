const {Schema , model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const { time } = require('console');

const ReactionSchema = new Schema(
  {
    reactionId: {
      // Mongoose's ObjectId data type
      type: Schema.Types.ObjectId,
      // Default value is set to a new ObjectId
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      // Set default value to the current timestamp
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, // String type
            required: true, // Required
            minlength: 1, // Min length of 1 character
            maxlength: 280 // Max length of 280 characters
        },

        createdAt: {
            type: Date, // Date type
            default: Date.now, // Default value is set to current timestamp
            // Uses a getter method to format the timestamp on query
            get: (timestamp) => dateFormat(timestamp)
        },

        username: {
            type: String, // String type
            required: true // Required
        },

        // array of nested documents created with the reactionSchema
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true, // Enable virtuals
            getters: true // Enable getters
        },
        id: false // Disable virtuals
    }
);
