const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");

const avatarRouter = Router();
const upload = multer({ storage: uploadConfig.storage });

avatarRouter.post("/", upload.single("avatar"), function (req, res) {
  const { filename, size } = req.file;

  return res.render("avatar", { image: `/uploads/${filename}`, size });
});

module.exports = avatarRouter;
