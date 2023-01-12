const {
	getPaypalDepositList,
	getDetailPaypalDeposit,
	createNewPaypalDeposit,
	updatePaypalDeposit
} = require("../services");

function PaypalDepositController() {
	this.getPaypalDepositList = async (req, res, next) => {
		await getPaypalDepositList()
			.then((datas) => {
				datas.length === 0
					? res.status(400).json({
							message: "failed-empty-data",
							error: "empty-data",
							datasLength: 0,
							datas: []
					  })
					: res.status(200).json({
							message: "successfully",
							error: null,
							datasLength: datas.length,
							datas: datas
					  });
			})
			.catch((error) =>
				res.status(400).json({
					message: "failed",
					error: error,
					datasLength: 0,
					datas: null
				})
			);
	};

	this.getDetailPaypalDeposit = async (req, res, next) => {
		await getDetailPaypalDeposit(req)
			.then((data) => {
				res.status(200).json({
					message: "successfully",
					error: null,
					data: data
				});
			})
			.catch((error) =>
				res.status(400).json({
					message: "failed",
					error: error,
					data: null
				})
			);
	};

	this.createNewPaypalDeposit = async (req, res, next) => {
		await createNewPaypalDeposit(req)
			.then(() => {
				res.status(200).json({
					message: "successfully",
					error: null
				});
			})
			.catch((error) => {
				console.log(error);
				res.status(400).json({
					message: "failed",
					error: error
				});
			});
	};

	this.updatePaypalDeposit = async (req, res, next) => {
		await updatePaypalDeposit(req)
			.then(() => {
				res.status(200).json({
					message: "successfully",
					error: null
				});
			})
			.catch((error) => {
				console.log(error);
				res.status(400).json({
					message: "failed",
					error: error
				});
			});
	};
}

module.exports = new PaypalDepositController();
