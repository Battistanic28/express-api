const express = require("express")
const app = express();
const listRoutes = require("./routes/list")

app.use(express.json());
app.use("/list", listRoutes);



module.exports = app;