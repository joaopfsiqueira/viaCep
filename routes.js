/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

const baseHandler = require('../../common/BaseHandler');
const requestViaCep = require('./controllers/viaCep');

module.exports.requestViaCep = baseHandler(requestViaCep);
