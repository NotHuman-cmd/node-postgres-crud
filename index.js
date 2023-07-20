const app = require("./app.js");
const { PORT } = require("./src/config.js");

app.listen(PORT);
console.log("server abierto en ", PORT);
