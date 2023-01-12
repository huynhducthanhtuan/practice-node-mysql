const sequelize = require("../configs/connectDatabase");
const { PaypalDepositModel } = require("../models");
const { QueryTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

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
	await PaypalDepositModel.create(req.body);

	/* sequelize.query */
	// const { id, member_id, currency_id, fee, amount, state } = req.body;

	// const sql = `
	// 	INSERT INTO paypal_deposits (id, uuid, member_id, currency_id, fee, amount, state)
	// 	VALUES ('${id}', '${uuidv4()}', '${member_id}', '${currency_id}', '${fee}', '${amount}', '${state}');
	// `;

	// await sequelize.query(sql, {
	// 	type: QueryTypes.INSERT
	// });
};

const updatePaypalDeposit = async (req) => {
	/* Model method */
	// const id = req.params.id;

	// await PaypalDepositModel.update(
	// 	{ ...req.body, updated_at: new Date() },
	// 	{
	// 		where: { id: id }
	// 	}
	// );

	/* sequelize.query */
	const id = req.params.id;
	const { member_id, currency_id, fee, amount, state } = req.body;

	const sql = `
		UPDATE paypal_deposits 
		SET member_id='${member_id}', currency_id='${currency_id}', fee='${fee}', amount='${amount}', state='${state}')
		WHERE id='${id}'
	`;

	await sequelize.query(sql, {
		type: QueryTypes.INSERT
	});
};

module.exports = {
	getPaypalDepositList,
	getDetailPaypalDeposit,
	createNewPaypalDeposit,
	updatePaypalDeposit
};
