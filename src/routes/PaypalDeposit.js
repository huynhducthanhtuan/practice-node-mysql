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

/**
 * @swagger
 * /api/paypal-deposit/create:
 *   post:
 *     description: Create new paypal deposit
 *     tags: [Paypal Deposit]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - uid
 *               - member_id
 *               - currency_id
 *               - fee
 *               - amount
 *               - state
 *             properties:
 *               id:
 *                  type: string
 *               uid:
 *                  type: string
 *               member_id:
 *                  type: string
 *               currency_id:
 *                  type: string
 *               fee:
 *                  type: string
 *               amount:
 *                  type: string
 *               state:
 *                  type: string
 *             example:
 *               id: "1"
 *               uid: "IDFD44832DA0"
 *               member_id: "1"
 *               currency_id: "paypal"
 *               fee: "0"
 *               amount: "0"
 *               state: "processing"
 *     responses:
 *       200:
 *         description: Create new paypal deposit successfully
 *       400:
 *         description: Create new paypal deposit failed
 */
router.post("/create", PaypalDepositController.createNewPaypalDeposit);

module.exports = router;
