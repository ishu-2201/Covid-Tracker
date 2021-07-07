const express = require("express");
const app = express();
const novelcovid = require("novelcovid");
const track = novelcovid;
app.set("view engine", "ejs");

app.get("/countries", (req, res) => {
    track.countries()
        .then((data) => {
            res.render("countries", { data });
        })
})

app.get("/country", (req, res) => {
    const id = req.query.country;
    track.countries({ country: id }).then((country_data) => {
        res.render("show_country", { c: country_data });
    })
})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("DEBUG: Listening on port 3000");
})