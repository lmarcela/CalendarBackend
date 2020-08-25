const { response } = require("express");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res
        .status(400)
        .json({ ok: false, msg: "Ya existe un usuario con ese correo" });
    }
    usuario = new Usuario(req.body);
    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Valide con el administrador" });
  }
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
  revalidarToken,
};
