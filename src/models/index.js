const { Sequelize } = require("sequelize");
const TodoModel = require("./todo");

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE || "tododb",
  process.env.POSTGRES_USER || "postgres",
  process.env.POSTGRES_PASSWORD || "postgres",
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
