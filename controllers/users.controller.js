const pool = require("../databases/dba.js");

const getUsers = async (req, res) => {
  const resultado = await pool.query("select * from usuarios where id = $1", [
    req.params.id,
  ]);

  res.json(resultado.rows);
  console.log(req.params.id);
};

const postUsers = async (req, res) => {
  const { nombre, apellido, edad, correo } = req.body;
  const respuesta = await pool.query(
    "insert into usuarios(nombre,apellido,edad,correo) values($1,$2,$3,$4) returning*",
    [nombre, apellido, edad, correo]
  );

  res.json("usuario creado exito");
  console.log(respuesta.rows);
};

const deleteUsers = async (req, res) => {
  const result = await pool.query(
    "delete from usuarios where id = $1 returning *",
    [req.params.id]
  );

  res.json("usuario eliminado");
  console.log(result.rows);
};

const putUsers = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido } = req.body;

  const reseult = await pool.query(
    "update usuarios set nombre = $1, apellido = $2 where id =$3 ",
    [nombre, apellido, id]
  );
  res.json("usuario actualizado");
  console.log(reseult);
};
module.exports = {
  putUsers,
  getUsers,
  postUsers,
  deleteUsers,
};
