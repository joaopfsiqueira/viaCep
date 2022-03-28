const joi = require('@hapi/joi');

const input = joi.object({
  uf: joi.string().required(),
  localidade: joi.string().required(),
  logradouro: joi.string().required(),
});
module.exports = input;
