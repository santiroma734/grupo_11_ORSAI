const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/imgs/products"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "PRODUCT" +
        "-" +
        req.body.category +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });

module.exports = upload;
