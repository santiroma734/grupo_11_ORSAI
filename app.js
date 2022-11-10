const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const loginRoutes = require("./src/routes/loginRoutes");
const mainRoutes = require("./src/routes/mainRoutes");
const productCartRoutes = require("./src/routes/productCartRoutes");
const productDetailRoutes = require("./src/routes/productDetailRoutes");
const registerRoutes = require("./src/routes/registerRoutes");
const productosRoutes = require("./src/routes/productosRoutes");
const cargaProductoRoutes = require("./src/routes/cargaProductoRoutes");
const edicionProductoRoutes = require("./src/routes/edicionProductoRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/src/views"));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.listen(3030, () => {
  console.log("Servidor funcionando");
});

app.use("/login", loginRoutes);
app.use("/", mainRoutes);
app.use("/pedido", productCartRoutes);
app.use("/register", registerRoutes);
app.use("/detalle-producto", productDetailRoutes);
app.use("/productos", productosRoutes);
app.use("/carga-producto", cargaProductoRoutes);
app.use("/edicion-producto", edicionProductoRoutes);
