const express = require('express');
const router = express.Router();


const {
  initDB,
  getAllTransactions,
  getStatistics,
  getPriceRangeData,
  getCategoryDistribution,
} = require('../controller/transactionController');


router.get('/init', initDB);

router.get('/transactions', getAllTransactions);
router.get('/statistics', getStatistics);
router.get('/bar-chart', getPriceRangeData);
router.get('pie-chart', getCategoryDistribution);

module.exports = router;

