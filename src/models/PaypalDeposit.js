const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/connectDatabase");

const PaypalDeposit = sequelize.define("paypal_deposits", {
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	subject: {
		type: DataTypes.INTEGER
	}
});

sequelize
	.sync()
	.then(() => {
		console.log("Create table paypal_deposits successfully");
	})
	.catch((error) => {
		console.error("Create table paypal_deposits failed: ", error);
	});

module.exports = PaypalDeposit;
