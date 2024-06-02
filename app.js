const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));

app.get("*", (req, res) => {
  res.render("pages/index", {});
})


app.listen(8000, () => console.log(`app running`));