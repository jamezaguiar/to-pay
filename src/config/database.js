require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT, // Linguagem do banco de dados
  host: process.env.DB_HOST, // Endereço
  username: process.env.DB_USERNAME, // Usuário do banco
  password: process.env.DB_PASSWORD, // Senha do banco
  database: process.env.DB_NAME, // Nome do banco
  define: {
    // Regras
    timestamps: true, // Adicionar estampas de tempo
    underscored: true, // Padrão de nomenclaturas usando _
    underscoredAll: true,
  },
};
