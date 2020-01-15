const express = require('express');
const FipeService = require('../services/fipeService');
const logger = require('../config/winston');

const router = express.Router();
const fipeService = new FipeService();

module.exports = () => {
	router.get('/marcas', (req, res) => {
		fipeService
			.getMarcas(FipeService.tipoVeiculo.CARRO)
			.then((response) => {
				res.json(response.data);
			})
			.catch((err) => {
				logger.error({ message: err });
				res.status(500).json({ message: 'Falha ao acessar marcas' });
			});
	});

	router.get('/marcas/:marca/modelos', (req, res) => {
		const { marca } = req.params;
		fipeService
			.getModelos(FipeService.tipoVeiculo.CARRO, marca)
			.then((response) => {
				res.json(response.data.modelos);
			})
			.catch((err) => {
				logger.error({ message: err });
				res.status(500).json({ message: 'Falha ao acessar modelos' });
			});
	});

	router.get('/marcas/:marca/modelos/:modelo/anos', (req, res) => {
		const { marca, modelo } = req.params;
		fipeService
			.getAnos(FipeService.tipoVeiculo.CARRO, marca, modelo)
			.then((response) => {
				res.json(response.data);
			})
			.catch((err) => {
				logger.error({ message: err });
				res.status(500).json({ message: 'Falha ao acessar anos' });
			});
	});

	router.get('/marcas/:marca/modelos/:modelo/anos/:ano', (req, res) => {
		const { marca, modelo, ano } = req.params;
		fipeService
			.getValor(FipeService.tipoVeiculo.CARRO, marca, modelo, ano)
			.then((response) => {
				res.json(response.data);
			})
			.catch((err) => {
				logger.error({ message: err });
				res.status(500).json({ message: 'Falha ao acessar valor' });
			});
	});
	return router;
};
