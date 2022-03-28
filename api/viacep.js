const http = require('../../../common/http');

// criando config que eu vou chamar no API.
const urlViacep = {
  dev: (uf, localidade, logradouro) => `https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json`,
  prod: (uf, localidade, logradouro) => `https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json`,
  method: 'GET',
};

const apiViaCep = async (uf, localidade, logradouro) => {
  try {
    const requestParams = {
      url: urlViacep[process.env.stage === 'prod' ? 'prod' : 'dev'](uf, localidade, logradouro),
      method: urlViacep.method,
    };
    const response = http.request(requestParams);
    return response; // retornar response
  } catch (error) {
    return console.log(error);
  }
};

module.exports = apiViaCep;
