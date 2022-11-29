const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/imgs/usuarios"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "USUARIO" +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });

module.exports = upload;
