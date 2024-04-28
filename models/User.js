const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: { type: String, required: true, trim: true, unique: true},
   email: {type: String, required: true, unique: true},
   thoughts
   friends
   //need a virtual 'friendCount' as well 
   //used lastAccessed to get current data: do I need this for the user?
})