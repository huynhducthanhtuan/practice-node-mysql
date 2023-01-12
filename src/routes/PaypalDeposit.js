const express = require("express");
const router = express.Router();
const { PaypalDepositController } = require("../controllers");

/**
 * @swagger
 * /api/paypal-deposit/list:
 *   get:
 *     description: Get Paypal Deposit List
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
 *     description: Get Paypal Deposit Detail
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
 *     description: Create New Paypal Deposit
 *     tags: [Paypal Deposit]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - member_id
 *               - currency_id
 *               - fee
 *               - amount
 *               - state
 *             properties:
 *               id:
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

/**
 * @swagger
 * /api/paypal-deposit/update/{id}:
 *   patch:
 *     description: Update Paypal Deposit
 *     tags: [Paypal Deposit]
 *     parameters:
 *        - name: id
 *          in: path
 *          description: Paypal Deposit ID
 *          type: string
 *          required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
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
 *               member_id: "1"
 *               currency_id: "paypal"
 *               fee: "0"
 *               amount: "0"
 *               state: "processing"
 *     responses:
 *       200:
 *         description: Update paypal deposit successfully
 *       400:
 *         description: Update paypal deposit failed
 */
router.patch("/update/:id", PaypalDepositController.updatePaypalDeposit);

/**
 * @swagger
 * /api/paypal-deposit/delete/{id}:
 *   delete:
 *     description: Delete Paypal Deposit
 *     tags: [Paypal Deposit]
 *     parameters:
 *        - name: id
 *          in: path
 *          description: Paypal Deposit ID
 *          type: string
 *          required: true
 *     responses:
 *       200:
 *         description: Delete paypal deposit successfully
 *       400:
 *         description: Delete paypal deposit failed
 */
router.delete("/delete/:id", PaypalDepositController.deletePaypalDeposit);

module.exports = router;
