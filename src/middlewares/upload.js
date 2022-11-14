const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/imgs/productos"));
    // donde va a ir la imagen fisicamente el /uploads
    // el destination indica donde va ir a parar y  el FileName con que nombre
  },
  filename: function (req, file, cb) {
    // FALTA PONER LOGICA PARA QUE SE GUARDE COMO PIZZA O EMPANADA
    cb(
      null,
      "PRODUCTO" +
        "-" +
        req.body.categoria +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
    console.log(req.body.categoria);
    // el filename genera el nombre con el cual se guarda el archivo, el date now para que tenga nombre unico e irrepetible\
    //implementar el form con  el enctype, configurar el multer en  las rutas y pasarle el middleware al controlador
  },
});
const upload = multer({ storage });
//para acceder al detalle del producto

module.exports = upload;
