const sequelize = require("../configs/connectDatabase");
const { Sequelize, DataTypes } = require("sequelize");

const PaypalDeposit = sequelize.define(
	"paypal_deposits",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			defaultValue: 1,
			initialAutoIncrement: 1,
			allowNull: false
		},
		uuid: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			allowNull: false
		},
		member_id: {
			type: DataTypes.INTEGER,
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

module.exports = PaypalDeposit;
