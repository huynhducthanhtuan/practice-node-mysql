const PaypalDepositRouter = require("./PaypalDeposit");

function routing(app) {
	/**
	 * @swagger
	 * tags:
	 *   name: Paypal Deposit
	 */

	/* Paypal Deposit routes */
	app.use("/api/paypal-deposit", PaypalDepositRouter);

	/* Notfound routes */
	app.use("*", (req, res, next) => {
		res.status(404).json({
			message: "not-found",
			error: "not-found"
		});
	});
}

module.exports = routing;
