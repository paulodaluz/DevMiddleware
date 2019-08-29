
const express = require("express");
const app = express();
const port = process.env.port || 3333;

app.get("/", function(req, res) {
   res.json(simpleMock);
});

app.listen(port, () => {
  `O servidor está rodando na porta ${port}`;
});
