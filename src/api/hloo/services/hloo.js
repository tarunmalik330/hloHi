'use strict';

/**
 * hloo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hloo.hloo');
