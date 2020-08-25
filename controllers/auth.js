const { response } = require("express");

const crearUsuario = (req, res = response) => {
  res.json({
    ok: true,
  });
};

const loginUsuario = (req, res) => {
  res.json({
    ok: true,
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
