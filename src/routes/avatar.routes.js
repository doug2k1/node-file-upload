const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");

const avatarRouter = Router();
const upload = multer(uploadConfig);

avatarRouter.post("/", upload.single("avatar"), function (req, res) {
  const { filename } = req.file;

  console.log(filename);

  return res.render("avatar", { image: `/uploads/${filename}` });
});

module.exports = avatarRouter;
