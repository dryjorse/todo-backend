const { Sequelize } = require("sequelize");
const TodoModel = require("./todo");
require("dotenv").config();

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  dialectModule: require("pg"),
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const Todo = TodoModel(sequelize);

module.exports = {
  sequelize,
  Todo,
};
