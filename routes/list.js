const express = require("express")
const router = new express.Router()
const items = require("../fakeDb")

router.get('/', (req, res) => {
    res.json(items)
})

router.post('/', (req, res) => {
    const newItem = {
        item: req.body.item,
        price: req.body.price
    }
    items.push(newItem)
    res.status(201).json(items)
})

router.get("/:item", (req,res) => {
    queryItem = items.find(item => item.item === req.params.item)
    if (queryItem === undefined) {
        console.log("Item not found.")
    }
    res.json(queryItem)
})


module.exports = router;