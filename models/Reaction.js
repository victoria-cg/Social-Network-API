//create a schema but not a model, schema only to use as the subdocument in the Thought model
const { Schema, Types } = require('mongoose');

// MONGO DB is about how users ACCESS DATA
// Reaction is never something users will search or look up

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
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
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

//question: can I use the same getter syntax as in the Thought.js model?

// //create a virtual property to format the createdAt date and time
// reactionSchema
//   .virtual('formatCreatedAt')
//   // Getter for formatting timestamp on query
//   .get(function () {
//     return this.createdAt.toDateString();
//   })
//   //setter to tell the JSON schema settings to include virtuals when converting the document to a JSON object
//   .set('toJSON', { virtuals: true });

module.exports = reactionSchema;
