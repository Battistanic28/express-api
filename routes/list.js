const express = require("express")
const router = new express.Router()
const items = require("../fakeDb")
const ExpressError = require("../expressError")


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
        throw new ExpressError("Item not found", 404)
    }

    res.json(items)
})

router.patch("/:item", (req,res) => {
    queryItem = items.find(item => item.item === req.params.item)
    if (queryItem === undefined) {
        throw new ExpressError("Cannot update. Item not found.", 404)
    }
    queryItem.item = req.body.item
    queryItem.price = req.body.price
    res.json(items)
})

router.delete("/:item", (req,res) => {
    queryItem = items.findIndex(item => item.item === req.params.item)
    if (queryItem === -1) {
        throw new ExpressError("Cannot delete. Item not found.", 404)
    }
    items.splice(queryItem,1)
    res.json(items)
})

module.exports = router;