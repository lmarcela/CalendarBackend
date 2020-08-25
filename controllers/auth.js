const { response } = require("express");

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res) => {
  const { email, password } = req.body;
  
  res.status(201).json({
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
  revalidarToken
};
