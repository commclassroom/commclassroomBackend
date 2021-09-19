/** load required packages */
const {
  InternalServerException,
} = require('http-exception-transformer/exceptions');

/** load peer modules and services */
const { logger } = require('../../services/logger');
const { FaqService } = require('./faq.service');

/**
 * FaqController contains definitions of all route handlers in /faq namespace.
 */
class FaqController {
  /**
   * each member function of controller is attached to each route
   */
  static async getAllFaqs() {
    try {
      logger.info('[faq]: listing all users');
      const faqList = await FaqService.findAllFaqs();

      return faqList;
    } catch (e) {
      throw new InternalServerException();
    }
  }
}

module.exports = { FaqController };
