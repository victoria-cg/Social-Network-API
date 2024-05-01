// import and define Mongoose
const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

// Create a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
 // Use built in date method to get current date
  createdAt: { type: Date, default: Date.now },
  //how do I link the username to the username from the user model?
  //doesn't it need to reference the user table, is the syntax below right even thought this isn't explicitly stated in acceptance criteria
 //does the many to one blog/user relationship have to be defined in this direction or just from the user side?
  //username: {type: Schema.Types.ObjectId, ref: 'user',},
  username: { type: String, required: true},
  //TO DO: Make nested documents with the reaction schema and create a virtual for reaction count
  reactions: [reactionSchema],
});


//create a virtual property to format the createdAt date and time
thoughtSchema
  .virtual('formatCreatedTime')
  // Getter for formatting timestamp on query
  .get(function () {
    return this.createdAt.toDateString();
  })
  //setter to tell the JSON schema settings to include virtuals when converting the document to a JSON object
  .set('toJSON', { virtuals: true });


// Using mongoose.model() to compile/initialize a model based on the schema, using the name of the model as the const name
const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought;
