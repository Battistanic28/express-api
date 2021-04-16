const express = require("express")
const app = express();
const listRoutes = require("./routes/list")

app.use(express.json());
app.use("/items", listRoutes);

module.exports = app;