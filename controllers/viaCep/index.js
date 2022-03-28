// const GenericError = require('../../../../common/errors/genericError');
const inputSchema = require('./utils/schema');
const HttpResponse = require('../../../../common/httpResponse');
const apiViaCep = require('../../api/viacep');
const {
  toHttpResponse,
} = require('../../../../common/utils');

const requestViaCep = async (event) => {
  const { queryStringParameters } = event;
  const inputValidation = inputSchema.validate(queryStringParameters);
  const { uf, localidade, logradouro } = queryStringParameters;
  
  try {
    if (inputValidation.error) {
      const { message } = inputValidation.error.details[0];
      return toHttpResponse(500, { message, data: {} });
    }

    // if (!queryStringParameters) {
    //   throw new GenericError('HttpError', 'Valores errados', {
    //     code: 400,
    //   });
    // }

    const solicitacao = await apiViaCep(uf, localidade, logradouro);
    const response = { solicitacao: solicitacao.data }; // retornar data do response

    return HttpResponse.ok(response);
  } catch (error) {
    return HttpResponse.serverError(error.message);
  }
};

module.exports = requestViaCep;
