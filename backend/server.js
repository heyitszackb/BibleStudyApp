const express = require("express");
const cors = require("cors");
const axios = require("axios");
const knex = require("knex");

const app = express();
const port = 3000;

const dbConfig = {
    client: "pg",
    connection: {
        user: "zbrandon", // Your PostgreSQL username
        host: "localhost",
        database: "smallGA", // Your PostgreSQL database name
        password: "1234", // Your PostgreSQL password
        port: 5432,
    },
};

const db = knex(dbConfig);

app.use(cors());

app.get("/users", async (req, res) => {
    try {
        const userData = await db.select("*").from("people");
        res.json(userData);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is NOW running at http://localhost:${port}`);
});
