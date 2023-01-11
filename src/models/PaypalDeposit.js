const { DataTypes } = require("sequelize");
const sequelize = require("../configs/connectDatabase");

const PaypalDeposit = sequelize.define(
	"paypal_deposits",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false
		},
		uid: {
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

module.exports = PaypalDeposit;
