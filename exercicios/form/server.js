const bodyParser = require("body-parser");
const express = require("express");
const port = 3000;
const app = express();
app.use(bodyParser({ extended: true }));
 
app.post("/usuarios", (req, resp) => {
  console.log(req.body);
  resp.send("<h1>Parabéns. Usuário Incluido!!!</h1>");
});

app.post("/usuarios/:id", (req, resp) => {
  console.log(req.params.id);
  console.log(req.body);
  resp.send("<h1>Parabéns. Usuário alterado!!!</h1>");
});
 
app.listen(port, () => console.log("servidor rodando na porta:", port));