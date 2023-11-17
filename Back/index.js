const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000;

const authRouter = require("./routes/AuthRoute");

dbConnect();

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});