const express = require("express");
const router = express.Router();
const transactionController = require('../controllers/transactions')

router.get("/get-all-transactions",transactionController.getAllTransactions );
router.post("/create-transaction",transactionController.createTransaction );
router.patch("/update-transaction-status",transactionController.updateTransactionStatus );


module.exports = router;