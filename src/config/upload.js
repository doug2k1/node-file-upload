const path = require("path");
const { uuid } = require("uuidv4");
const multer = require("multer");

const uploadFolder = path.resolve(__dirname, "../../tmp");

const uploadConfig = {
  uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(req, file, callback) {
      const fileName = `${uuid()}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

module.exports = uploadConfig;
