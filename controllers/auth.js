const { response } = require("express");

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;
  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: "El nombre debe ser de 5 letras",
    });
  }
  res.json({
    ok: true,
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    email,
    password,
  });
};
const revalidarToken = (req, res) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
