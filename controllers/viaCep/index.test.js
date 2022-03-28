const requestViaCep = require('./index');
// const Client = require('../../client/clientGetUsers');
const mockGetAddress = require('./mocks/getAddress.json');
const apiViaCep = require('../../api/viacep');

// jest.mock('../../../../common/BaseHandler/BaseController', () => ({}));
// jest.spyOn(apiViaCep, 'apiViaCep').mockImplementation(() =>
// new Promise((resolve) => resolve(mockGetAddress)));

jest.mock('../../api/viacep');

describe('requestViaCep', () => {
  it('should return status code 200 in case of success with params', async () => {
    apiViaCep.mockResolvedValue(mockGetAddress);
    const event = {
      queryStringParameters: {
        uf: 'RS',
        localidade: 'Porto Alegre',
        logradouro: 'Domingos',
      },
    };

    const response = await requestViaCep(event);
    // console.log(response.body.solicitacao);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('solicitacao');
  });

  it('should return status code 500 bad request', async () => {
    const event = {
      queryStringParameters: {
        id: 1234,
      },
    };

    const response = await requestViaCep(event);

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('message');
  });
});
