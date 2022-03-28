 apiViaCep

Essa API serve para consultar a api https://viacep.com.br/ e retornar objetos com os dados completos de um endereço. 

## Parâmetros Obrigatórios

- UF
  - **O que é?** Unidade Federativa em questão (ex: 'RS')
  - **De onde vem?** De acordo com a região do endereço.

- Localidade
  - **O que é?** Mais conhecida como a "cidade" em que deseja pesquisar.
  - **De onde vem?** De acordo com a região do endereço.

- Bairro
  - **O que é?** Comunidade ou região dentro de uma localidade.
  - **De onde vem?** De acordo com a região do endereço

## Request

- Endpoint - `http://localhost:3000/requestViaCep`
- Método - `GET`

## Uso
```
  /requestViaCep?uf=RS&cidade=Porto Alegre&logradouro=Domingos
```

## Retorno

- Quanto foi encontrado
```json
"response": {
      "statusCode": 200,
      "body": [
        {
          "cep": "91420-270",
          "logradouro": "Rua São Domingos",
          "complemento": "",
          "bairro": "Bom Jesus",
          "localidade": "Porto Alegre"
          "uf": "RS",
          "ibge": "4314902",
          "gia": "",
          "ddd": "51",
          "siafi": "8801"
        },
```

- Quando não foi encontrado
```json
"response": {
      "statusCode": 200,
      "body": []
    }
```

- Faltando parametros

```json
{
    "status_code": 500,
    "message": "\"logradouro\" is not allowed to be empty",
    "data": {},
}    
```
