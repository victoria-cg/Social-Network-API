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


//create a getter method to formate the 'created at' date
SubdocumentSchema.path('createdAt').get(function(value) {
//return formatted date as a string
return value.toDateString();
});

module.exports = reactionSchema;
