const express = require("express");

const database = require("./db");
const router = require("./routes/router");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
