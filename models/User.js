const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: { type: String, required: true, trim: true, unique: true},
   email: {
    type: String, 
    required: true, 
    unique: true, 
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
    },
    //thoughts references the thought model
   thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
   //friends self-references the user model
   friends:[{ type: Schema.Types.ObjectId, ref: 'User' }]
   
   //used lastAccessed to get current data: do I need this for the user?
});

//'friendCount' virtual to retrieve the legnth of the user's friends array field on query 
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

//create a const to hold the User model
const User = mongoose.model('User', userSchema);

//export the User model for use in other directories
module.exports = User;