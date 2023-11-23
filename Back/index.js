const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv").config();

const morgan = require("morgan");

const PORT = process.env.PORT || 4000;

const authRouter = require("./routes/AuthRoute");
const productRouter = require("./routes/ProductRoute");

const cookieParser = require("cookie-parser");

dbConnect();

app.use(morgan("dev"));

app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});