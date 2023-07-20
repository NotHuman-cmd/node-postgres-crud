const Express = require("express");
const userRoutes = require("./routes/users.routes.js");
const employeesRoutes = require("./routes/employees.routes.js");
const app = Express();

//middleware
app.use(Express.json());

//Routes
app.use("/api", userRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    mensaje: "No Found Culera",
  });
});

module.exports = app;
