// import and define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt:
  //TO DO: Finish the remaining content for thoughtSchema 
});

// Using mongoose.model() to compile a model based on the schema, using the name of the model as the const name
const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought;
