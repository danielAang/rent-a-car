const axios = require('axios').default;

const tipoVeiculo = {
  CARRO: 'carros',
  MOTOS: 'motos',
  CAMINHOES: 'caminhoes',
};

class FipeService {
  constructor() {
    this.baseUrl = 'https://parallelum.com.br/fipe/api/v1';
  }

  getMarcas(tipo) {
    const url = `${this.baseUrl}/${tipo}/marcas`;
    return axios.get(url);
  }
}

module.exports = FipeService;
