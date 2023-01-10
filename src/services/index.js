const { PaypalDepositModel } = require("../models");

const getListOfPaypalDeposit = async () => {
	return await PaypalDepositModel.findAll({ raw: true });
};

const getDetailOfPaypalDeposit = async (id) => {
	return await PaypalDepositModel.findOne({
		where: { id: id }
	});
};

module.exports = {
	getListOfPaypalDeposit,
	getDetailOfPaypalDeposit
};
