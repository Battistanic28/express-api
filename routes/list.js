const express = require("express")
const router = new express.Router()
const items = require("../fakeDb")

router.get('/', (req, res) => {
    console.log("working...")
    res.json({items})
})


module.exports = router;