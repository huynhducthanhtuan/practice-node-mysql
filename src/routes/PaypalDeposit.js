const express = require("express");
const router = express.Router();
const { PaypalDepositController } = require("../controllers");

/**
 * @swagger
 * /api/paypal-deposit/list:
 *   get:
 *     description: Get paypal deposit list
 *     tags: [Paypal Deposit]
 *     responses:
 *       200:
 *         description: Get paypal deposit list successfully
 *       400:
 *         description: Get paypal deposit list failed
 */
router.get("/list", PaypalDepositController.getPaypalDepositList);

/**
 * @swagger
 * /api/paypal-deposit/{id}:
 *   get:
 *     description: Get paypal deposit detail
 *     tags: [Paypal Deposit]
 *     parameters:
 *        - name: id
 *          in: path
 *          description: Paypal Deposit ID
 *          type: string
 *          required: true
 *     responses:
 *       200:
 *         description: Get paypal deposit detail successfully
 *       400:
 *         description: Get paypal deposit detail failed
 */
router.get("/:id", PaypalDepositController.getDetailPaypalDeposit);

module.exports = router;
