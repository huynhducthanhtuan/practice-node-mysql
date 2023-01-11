const Sequelize = require("sequelize");
require("dotenv").config();

const {
	DATABASE_NAME,
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	DATABASE_HOST,
	DATABASE_DIALECT
} = process.env;

const sequelize = new Sequelize(
	DATABASE_NAME,
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	{
		host: DATABASE_HOST,
		dialect: DATABASE_DIALECT,
		dialectOptions: {
			supportBigNumbers: true
		},
		logging: false
	}
);

sequelize
	.authenticate()
	.then(() => console.log("Connect database successfully"))
	.catch((error) => console.error("Connect database failed: ", error));

module.exports = sequelize;
