const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("req body dest", req.body);
    cb(null, path.join(__dirname, "../../public/imgs/productos"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "PRODUCTO" +
        "-" +
        req.body.categoria +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
    console.log("req body filename", req.body);
  },
});
const upload = multer({ storage });

module.exports = upload;
