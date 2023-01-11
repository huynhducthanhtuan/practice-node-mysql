const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/connectDatabase");

const PaypalDeposit = sequelize.define(
	"paypal_deposits",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			// defaultValue: 0,
			allowNull: false
		},
		uuid: {
			// type: Sequelize.UUID,
			// defaultValue: Sequelize.UUIDV4,
			type: DataTypes.STRING(30),
			allowNull: false
		},
		member_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		currency_id: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		fee: {
			type: DataTypes.DOUBLE,
			allowNull: false
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: false
		},
		state: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false
		}
	},
	{
		timestamps: false
	}
);

sequelize
	.sync()
	.then(() => console.log("Create table paypal_deposits successfully"))
	.catch((error) =>
		console.error("Create table paypal_deposits failed: ", error)
	);

module.exports = PaypalDeposit;
