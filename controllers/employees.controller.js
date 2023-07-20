const { json } = require("express");
const pool = require("../databases/dba");

const getEmployees = async (req, res) => {
  try {
    const lista = await pool.query("select * from employees");
    console.log(lista.rows);
    res.json(lista.rows);
  } catch (error) {
    res.status(200);
  }
};

const postEmployees = async (req, res) => {
  const { nombre, salary } = req.body;
  const result = await pool.query(
    "insert into employees(nombre,salary) values($1, $2) returning*",
    [nombre, salary]
  );

  res.json(result.rows[0]);
  console.log(result.rows[0]);
};

const putEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, salary } = req.body;

    const result = await pool.query(
      "update employees set nombre = $1, salary = $2  where id =$3 returning *",
      [nombre, salary, id]
    );
    res.json("actualizado");
    console.log(result.rows);
  } catch (error) {
    console.log("Obtuviste un error");
  }
};

const deleteEmployees = (req, res) => {
  res.send("eliminando empleados");
};

module.exports = {
  getEmployees,
  putEmployees,
  postEmployees,
  deleteEmployees,
};
