const express = require("express");
const ExpressError = require("./expressError");
const app = express();
const listRoutes = require("./routes/list")

app.use(express.json());
app.use("/items", listRoutes);

app.use((req, res, next) => {
    return new ExpressError("Not found", 404);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);

return res.json({
    error: err.message
});
});

module.exports = app;