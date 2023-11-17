const { default: mongoose } = require("mongoose")

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Banco de Dados conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = dbConnect;