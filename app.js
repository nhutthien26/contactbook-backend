const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

const setupContactRouter = require("./app/routes/contact.routes");


setupContactRouter(app);
module.exports = app;