/** load required packages */
const {
  InternalServerException,
} = require('http-exception-transformer/exceptions');

/** load peer modules and services */
const { logger } = require('../../services/logger');
const { FaqService } = require('./faq.service');

/**
 * UserController contains definitions of all route handlers in /user namespace.
 */
class FaqController {
  /**
   * each member function of controller is attached to each route
   */
  static async getAllFaqs() {
    try {
      logger.info('[user]: listing all users');
      const faqList = await FaqService.findAllFaqs();

      return faqList;
    } catch (e) {
      throw new InternalServerException();
    }
  }
}

module.exports = { FaqController };
