const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const avatarRouter = require("./routes/avatar.routes");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/uploads", express.static(uploadConfig.uploadFolder));

const upload = multer(uploadConfig);

app.get("/", function (req, res) {
  res.render("index");
});

app.use("/avatar", avatarRouter);

app.listen(3333, () => {
  console.log("🚀 Server started on http://localhost:3333");
});
