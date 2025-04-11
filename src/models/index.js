const { Sequelize } = require("sequelize");
const TodoModel = require("./todo");

const sequelize = new Sequelize(
  process.env.DB_NAME || "tododb",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "postgres",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  }
);

const Todo = TodoModel(sequelize);

module.exports = {
  sequelize,
  Todo,
};
