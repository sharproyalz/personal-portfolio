const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");
const projects = require("./projects.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// // Configure mustache
app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());

// Render the template
app.get("/", (req, res) => {
    res.render("index", { projects: projects });
});

app.listen(3000);
