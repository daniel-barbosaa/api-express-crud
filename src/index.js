const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  console.log("Capturado pelo middleware");
  console.log(error); // Log do erro
  response.status(500).json({
    message: "Ocorreu um erro interno no servidor",
    error: error.message || "Erro desconhecido",
  });
});
app.listen(3000, () =>
  console.log("🔥🔥🔥Server started at http://localhost:3000")
);
