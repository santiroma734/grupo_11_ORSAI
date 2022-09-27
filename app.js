const express = require("express");
const app = express();
const path = require('path')

app.use(express.static("public"));

app.listen(3030, () => {
  console.log("Servidor funcionando");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/register.html"));
});

app.get("/pedido", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productCart.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
