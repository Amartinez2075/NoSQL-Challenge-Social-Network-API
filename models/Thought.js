const {Schema , model, Types} = require('mongoose'); // Import the Mongoose library
const dateFormat = require('../utils/dateFormat'); // Import the dateFormat module

const ReactionSchema = new Schema( // Schema constructor
  { // Schema constructor
    reactionId: { // Use Mongoose's ObjectId data type
      // Mongoose's ObjectId data type
      type: Schema.Types.ObjectId,
      // Default value is set to a new ObjectId
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String, // String type
      required: true, // Required
      maxlength: 280, // Max length of 280 characters
    },

    username: {
      type: String, // String type
      required: true, // Required
    },

    createdAt: {
      type: Date,
      // Set default value to the current timestamp
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true, // Enable getters
    },
    id: false, // Disable virtuals
  }
);

const ThoughtSchema = new Schema( // Schema constructor
    {
        thoughtText: {
            type: String, // String type
            required: true,// Required
            minlength: 1, // Min length of 1 character
            maxlength: 280, // Max length of 280 characters
        },

        createdAt: {
            type: Date, // Date type
            default: Date.now, // Default value is set to current timestamp
            // Uses a getter method to format the timestamp on query
       // get: (timestamp) => dateFormat(timestamp) 
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

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
