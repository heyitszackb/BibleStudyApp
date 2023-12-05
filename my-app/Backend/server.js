const express = require("express");
const { Client } = require("pg");
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3000;

const dbConfig = {
    user: "zbrandon", // Your PostgreSQL username
    host: "localhost",
    database: "smallGA", // Your PostgreSQL database name
    password: "1234", // Your PostgreSQL password
    port: 5432,
};

const client = new Client(dbConfig);

client.connect();

// Use cors middleware to enable CORS
app.use(cors());

app.get("/users", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM people");
        const userData = result.rows;

        res.json(userData);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
