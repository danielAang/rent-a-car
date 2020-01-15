const axios = require('axios').default;
const logger = require('../config/winston');

class FipeService {
	static tipoVeiculo = {
		CARRO: 'carros',
		MOTOS: 'motos',
		CAMINHOES: 'caminhoes',
	};

	static baseUrl = 'https://parallelum.com.br/fipe/api/v1';

	getMarcas(tipo) {
		const url = `${FipeService.baseUrl}/${tipo}/marcas`;
		logger.info(`Acessando url: ${url}`);
		return axios.get(url);
	}

	getModelos(tipo, marca) {
		const url = `${FipeService.baseUrl}/${tipo}/marcas/${marca}/modelos`;
		logger.info(`Acessando url: ${url}`);
		return axios.get(url);
	}

	getAnos(tipo, marca, modelo) {
		const url = `${FipeService.baseUrl}/${tipo}/marcas/${marca}/modelos/${modelo}/anos`;
		logger.info(`Acessando url: ${url}`);
		return axios.get(url);
	}

	getValor(tipo, marca, modelo, ano) {
		const url = `${FipeService.baseUrl}/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`;
		logger.info(`Acessando url: ${url}`);
		return axios.get(url);
	}
}

module.exports = FipeService;
