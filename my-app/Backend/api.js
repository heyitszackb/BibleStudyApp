const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "10.120.160.138",
        port: 3306,
        user: "root",
        password: "Mcmjsml7!",
        database: "smallGAdatabase",
    },
});

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/users", async (req, res) => {
    console.log(req.query);
    const { Fname, Lname, email, password, phoneNum, prayerRequest } =
        req.query;

    try {
        await knex("users").insert({
            Fname,
            Lname,
            email,
            password,
            phoneNum,
            prayerRequest,
        });

        res.status(201).send("User added successfully");
    } catch (error) {
        console.log("ERRRORROR", error);
        res.status(500).send("Error adding user");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
