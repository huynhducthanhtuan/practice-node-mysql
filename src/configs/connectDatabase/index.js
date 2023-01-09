const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const {
	DATABASE_NAME,
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	DATABASE_HOST,
	DATABASE_DIALECT
} = process.env;

console.log(
	DATABASE_NAME,
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	DATABASE_HOST,
	DATABASE_DIALECT
);

const sequelize = new Sequelize(
	DATABASE_NAME,
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	{
		host: DATABASE_HOST,
		dialect: DATABASE_DIALECT
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
