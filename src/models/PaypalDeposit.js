const { DataTypes } = require("sequelize");
const sequelize = require("../configs/connectDatabase");

const PaypalDeposit = sequelize.define(
	"paypal_deposits",
	{
		id: {
			type: DataTypes.STRING(100),
			primaryKey: true,
			allowNull: false
		},
		member_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		uid: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		currency_id: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		fee: {
			type: DataTypes.DECIMAL(38, 14),
			allowNull: false
		},
		amount: {
			type: DataTypes.DECIMAL(38, 14),
			allowNull: false
		},
		state: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		type: {
			type: DataTypes.STRING(30),
			allowNull: true
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
		},
		completed_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false
		},
		payment_id: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		token: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		payer_id: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		payment_link: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	},
	{
		timestamps: false
	}
);

module.exports = PaypalDeposit;
