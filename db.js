const Sequalize = require("sequelize");
const databaseUrl = "postgres://postgres:jay@localhost:5432/postgres";
const db = new Sequalize(databaseUrl);

db.sync()
  .then(() => console.log("Database connected"))
  .catch(console.error);

module.exports = db;
