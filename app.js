const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const mainRoutes = require("./src/routes/mainRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const usersRoutes = require("./src/routes/usersRoutes");
const productCartRoutes = require("./src/routes/productCartRoutes");
const productosRoutes = require("./src/routes/productosRoutes");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/src/views"));
app.use(express.static(path.join(__dirname + "/public")));

app.listen(3030, () => {
  console.log("Servidor funcionando");
});

app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/users", usersRoutes);
app.use("/pedido", productCartRoutes);
app.use("/productos", productosRoutes);
