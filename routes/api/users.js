const router = require("express").Router()


// 
//app.post("/", (req,res)) => {create User}


// "/api/model(s)/:id" -> update

// app.post("/:userID/friends/:friendID", (req,res)=>{
    //need to know affected user, friends, new friend id
    // Even though we want to create a new friend, we use a post route 
    // I need to post something new to the user when making a new friend, but what happens in that route is an update
    //the route will be a post but what happens in the route is an update
//we write a post route and inside the post route we are doing findOneAndUpdate on the user
    // })

//the same is true for the delete route, we need to findOneAndUpdate the user
//you are altering the friends field, which holds a reference, and you either add or delete to that field
    //appp.delete("/:userID/friends/:friendID", (req,res)=> {
        //User.update and removemthe friend ID 
    // })
module.exports - router
