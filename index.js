const express = require("express");
const app = express();

const port = 3333;

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  `O servidor está rodando na porta ${port}`;
});
