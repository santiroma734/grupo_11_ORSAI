const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const db = require("../database/models");

const Users = db.User;

const controller = {
  login: (req, res) => {
    res.render("users/login");
  },
  loginUser: (req, res) => {
    console.log(req.body);
    // const userToLogin = users.find((user) => {
    //   return user.email === req.body.email;
    // });
    const userToLogin = Users.findOne({
      where: { email: req.body.email },
    });
    // Si el usuario existe
    if (userToLogin) {
      const correctPassword = bcrypt.compareSync(
        req.body.password,
        userToLogin.password
      );
      // Si la contraseña es correcta
      if (correctPassword) {
        delete userToLogin.password;
        req.session.loggedUser = userToLogin;
        // COOKIES
        if (req.body.remember) {
          // expiración de las cookies = 7 días
          res.cookie("Email", userToLogin.email, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
          });
        }
        console.log("logueado");
        return res.redirect("/users/profile");
      }
      console.log("contraseña incorrecta");
      return res.render("users/login", {
        errors: {
          password: {
            msg: "Contraseña Incorrecta",
          },
        },
      });
    }
    if (!userToLogin) {
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Este e-mail no esta en nuestra BD",
          },
        },
      });
    }
  },
  register: (req, res) => {
    res.render("users/register");
  },
  registerUser: (req, res) => {
    // proceso de registro de usuario.
    console.log(req);
    const newUser = {
      id: Date.now(),
      firstName: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: bcrypt.hashSync(req.body.password, 7),
      image: req.file.filename,
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
    return res.redirect("/users/login");
  },
  profile: (req, res) => {
    res.render("users/userProfile", { user: req.session.loggedUser });
  },
};

module.exports = controller;
