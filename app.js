const express = require("express");
const app = express();

const loginRoutes = require('./src/routes/loginRoutes');
const mainRoutes = require('./src/routes/mainRoutes');
const productCartRoutes = require('./src/routes/productCartRoutes');
const productDetailRoutes = require('./src/routes/productDetailRoutes');
const registerRoutes = require('./src/routes/registerRoutes');
const productosRoutes = require('./src/routes/productosRoutes');

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3030, () => {
  console.log("Servidor funcionando");
});

app.use("/login", loginRoutes);
app.use('/', mainRoutes)
app.use("/pedido", productCartRoutes);
app.use("/register", registerRoutes);
app.use("/detalle-producto", productDetailRoutes);
app.use("/productos", productosRoutes)