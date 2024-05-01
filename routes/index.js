const router = require("express").Router()
const apiRoutes = require("./api")
console.log("indes.js, in my routes")
console.log(router)


router.use("/api", apiRouters)
module.exports - router