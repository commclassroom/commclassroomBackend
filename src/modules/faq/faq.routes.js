const express = require('express');

const router = express.Router();

/** load the service */
const { FaqController } = require('./faq.controller');

/** to list all faqs */
router.get('/', async (req, res) => {
  const faqList = await FaqController.getAllFaqs();
  return res.json(faqList);
});

/** export the routes to be binded to application */
module.exports = router;
