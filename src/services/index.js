const { PaypalDepositModel } = require("../models");
const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/connectDatabase");

const getPaypalDepositList = async () => {
	/* Model method */
	return await PaypalDepositModel.findAll({ raw: true });

	/* sequelize.query */
	// return await sequelize.query("SELECT * FROM `paypal_deposits`", {
	// 	type: QueryTypes.SELECT
	// });
};

const getDetailPaypalDeposit = async (req) => {
	/* Model method */
	const id = req.params.id;

	return await PaypalDepositModel.findOne({
		where: { id: id }
	});

	/* sequelize.query */
	// const result = await sequelize.query(
	// 	"SELECT * FROM `paypal_deposits` WHERE id = :id",
	// 	{
	// 		replacements: { id: id },
	// 		type: QueryTypes.SELECT
	// 	}
	// );

	// return result[0];
};

const createNewPaypalDeposit = async (req) => {
	/* Model method */
	// await PaypalDepositModel.create(req.body);

	/* sequelize.query */
	const { id, uuid, member_id, currency_id, fee, amount, state } = req.body;

	const sql = `
		INSERT INTO paypal_deposits (member_id, currency_id, fee, amount, state)
		VALUES ('${id}', '${uuid}', '${member_id}', '${currency_id}', '${fee}', '${amount}', '${state}');
	`;

	await sequelize.query(sql, {
		type: QueryTypes.INSERT
	});
};

module.exports = {
	getPaypalDepositList,
	getDetailPaypalDeposit,
	createNewPaypalDeposit
};
