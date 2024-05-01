const router = require("express").Router()
const userRoutes = require("./users")
const thoughtRoutes = require("./thoughts")
//ocalhost3001/api
router.use('/users', userRoutes)
router.use("/thoughts", thoughtRoutes)

module.exports - router
