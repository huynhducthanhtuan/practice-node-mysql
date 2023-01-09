const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "hello_world_db",
  "DATABASE_USERNAME",
  "DATABASE_PASSWORD",
  {
    host: "DATABASE_HOST",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connect database successfully");
  })
  .catch((error) => {
    console.error("Connect database failed: ", error);
  });

module.exports = sequelize;
