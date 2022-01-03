const contatoRepository = require('../repositories/contatoRepository');

module.exports = {
    async adicionar(req, res) {
        try {
            const { nome, email, telefone } = req.body;
            const retorno = await contatoRepository.adicionar(nome, email, telefone);
            res.status(201).json(retorno);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    async consultar(req, res) {
        try {
            const contatos = await contatoRepository.consultar();
            res.status(200).json(contatos);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    async consultarPorId(req, res) {
        try {
            const { id } = req.params;
            const contato = await contatoRepository.consultarPorId(id);
            res.status(200).json(contato);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    async atualizarPorId(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, telefone } = req.body;
            const contato = await contatoRepository.atualizarPorId(id, nome, email, telefone);
            res.status(200).json(contato);
        } catch (e) { 
            res.status(400).json(e.message);
        }
    },

    async deletarPorId(req, res) {
        try {
            const { id } = req.params;
            const contato = await contatoRepository.deletarPorId(id);
            res.status(200).json(contato);
        } catch (e) { 
            res.status(400).json(e.message);
        }
    }
}