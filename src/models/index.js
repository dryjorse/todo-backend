const { Sequelize } = require("sequelize");
const TodoModel = require("./todo");

const sequelize = new Sequelize(
  process.env.POSTGRES_URL,
  // "postgres://postgres.rtvewaypnrvvmsfrhygv:fbWwBfUPrWuWkm8h@aws-0-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x",
  // process.env.POSTGRES_DATABASE || "tododb",
  // process.env.POSTGRES_USER || "postgres",
  // process.env.POSTGRES_PASSWORD || "postgres",
  {
    // host: process.env.POSTGRES_HOST || "localhost",
    dialect: "postgres",
    dialectModule: require("pg"),
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <-- вот этот флаг отключает проверку сертификата
      },
    },
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false, // важный момент для Supabase
    //   },
    // },
  }
);

const Todo = TodoModel(sequelize);

module.exports = {
  sequelize,
  Todo,
};
