const bcrypt = require("bcryptjs");
const db = require("../database/models");
const { validationResult } = require("express-validator");

const Users = db.User;

const controller = {
  login: (req, res) => {
    res.render("users/login");
  },
  loginUser: async (req, res) => {
    try {
      // Validaciones
      const resultLoginValidations = validationResult(req);

      if (resultLoginValidations.errors.length > 0) {
        return res.render("users/login", {
          errors: resultLoginValidations.mapped(),
          oldData: req.body,
        });
      }

      const userToLogin = await Users.findOne({
        where: { email: req.body.email },
        include: { model: db.UserCategory, as: "category" },
      });

      if (!userToLogin) {
        return res.render("users/login", {
          errors: {
            email: { msg: "No hay un usuario registrado con ese email" },
          },
          oldData: req.body,
        });
      }

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
          console.log("Usuario logueado");
          return res.redirect("/users/profile");
        }

        console.log("Contraseña Incorrecta");
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
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },
  register: (req, res) => {
    res.render("users/register");
  },
  registerUser: async (req, res) => {
    // Validaciones
    const resultValidateRegister = validationResult(req);
    const emailInDB = await Users.findOne({
      where: { email: req.body.email },
    });

    if (resultValidateRegister.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidateRegister.mapped(),
        oldData: req.body,
      });
    }

    if (emailInDB) {
      return res.render("users/register", {
        errors: {
          email: { msg: "Este email ya está registrado" },
        },
        oldData: req.body,
      });
    }

    // proceso de registro de usuario.
    const newUser = {
      id: Date.now(),
      firstName: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: bcrypt.hashSync(req.body.password, 7),
      image: req.file.filename,
      idUserCategory: 2,
    };
    Users.create(newUser);

    return res.redirect("/users/login");
  },
  profile: (req, res) => {
    res.render("users/userProfile", { user: req.session.loggedUser });
  },
  logoutUser: (req, res) => {
    res.clearCookie("Email");
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = controller;
