const {
	getListOfPaypalDeposit,
	getDetailOfPaypalDeposit
} = require("../services");

function PaypalDepositController() {
	this.getPaypalDepositList = async (req, res, next) => {
		await getListOfPaypalDeposit()
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
		const id = req.params.id;
		console.log("id: " + id);

		await getDetailOfPaypalDeposit(id)
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
}

module.exports = new PaypalDepositController();
