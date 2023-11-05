const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

require("dotenv").config();
app.use(express.json());

// Import and use the todos router
const todoRouter = require("./routers/todos");
app.use("/api/v1", todoRouter);

// Import and establish the database connection
const dbDatabase = require("./config/database");
dbDatabase();

app.get("/", (req, res) => {
    res.send(`<h1>This Is Homepage Baby</h1>`);
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED AT PORT ${PORT}`);
});
