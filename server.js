const express = require("express");
const path = require("path");
require("dotenv").config();
const Document = require("./models/document");
require("./db/conn");
const PORT = process.env.PORT || 8000;

const app = express();

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", async (req, res) => {
  try {
    const document = await Document.findById("6135e4d8b2e728b72f8a8cbf");
    res.render("index", { document });
  } catch (error) {
    res.redirect("/new");
  }
});

app.get("/new", (req, res) => {
  res.render("create", { text: "" });
});

app.post("/save", async (req, res) => {
  try {
    const document = new Document({ text: req.body.text.trim() });
    await document.save();
    res.redirect(`document/${document.id}`);
  } catch (error) {
    res.render("create", { text: req.body.text });
  }
});

app.get("/duplicate/:id", async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    res.render("create", { text: document.text });
  } catch (error) {
    res.redirect(`/new`);
  }
});

app.get("/document/:id", async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    res.render("index", { document });
  } catch (error) {
    res.redirect("/error");
  }
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
