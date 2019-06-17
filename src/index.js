const express = require ('express')
const karyawanRouter = require('./routers/karyawanRouter')

const nad = express()
const port = 1996

nad.use (express.json())
nad.use (karyawanRouter)

nad.listen(port, () => {
    console.log("Running at", port);
})
