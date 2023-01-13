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
	// const id = req.params.id;

	// const paypalDeposits = await sequelize.query(
	// 	"SELECT * FROM `paypal_deposits` WHERE id = :id",
	// 	{
	// 		replacements: { id: id },
	// 		type: QueryTypes.SELECT
	// 	}
	// );

	// return paypalDeposits[0];
};

const createNewPaypalDeposit = async (req) => {
	/* Model method */
	// await PaypalDepositModel.create({
	// 	...req.body,
	// 	id: (await PaypalDepositModel.max("id")) + 1
	// });

	/* sequelize.query */
	const { member_id, currency_id, fee, amount, state } = req.body;
	const maxId = await sequelize.query(
		"SELECT MAX(ID) AS maxId FROM `paypal_deposits`",
		{ type: QueryTypes.SELECT }
	);
	const id = maxId[0].maxId + 1;
	const uuid = uuidv4();

	const sql = `
		INSERT INTO paypal_deposits (id, uuid, member_id, currency_id, fee, amount, state)
		VALUES ('${id}', '${uuid}', '${member_id}', '${currency_id}', '${fee}', '${amount}', '${state}');
	`;

	await sequelize.query(sql, {
		type: QueryTypes.INSERT
	});
};

const updatePaypalDeposit = async (req) => {
	/* Model method */
	const id = req.params.id;

	const isUpdated = await PaypalDepositModel.update(
		{ ...req.body, updated_at: new Date() },
		{ where: { id: id } }
	);

	return Boolean(isUpdated);

	/* sequelize.query */
	// const id = req.params.id;
	// const { member_id, currency_id, fee, amount, state } = req.body;

	// const sql = `
	// 	UPDATE paypal_deposits
	// 	SET member_id='${member_id}', currency_id='${currency_id}', fee='${fee}', amount='${amount}', state='${state}'
	// 	WHERE id='${id}'
	// `;

	// const result = await sequelize.query(sql, {
	// 	type: QueryTypes.UPDATE
	// });

	// return Boolean(result[1]);
};

const deletePaypalDeposit = async (req) => {
	/* Model method */
	const id = req.params.id;

	const resultCode = await PaypalDepositModel.destroy({
		where: { id: id }
	});

	return Boolean(resultCode);

	/* sequelize.query */
	// const id = req.params.id;

	// const sql = `
	// 	DELETE FROM paypal_deposits
	// 	WHERE id='${id}'
	// `;

	// await sequelize.query(sql, {
	// 	type: QueryTypes.DELETE
	// });

	// return true;
};

module.exports = {
	getPaypalDepositList,
	getDetailPaypalDeposit,
	createNewPaypalDeposit,
	updatePaypalDeposit,
	deletePaypalDeposit
};
