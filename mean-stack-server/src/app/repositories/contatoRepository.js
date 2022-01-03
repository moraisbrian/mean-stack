const Contato = require('../models/contato');

module.exports = {
    async adicionar(nome, email, telefone) {
        const contato = new Contato({ nome, email, telefone });
        return await contato.save();
    },

    async consultar() {
        return await Contato.find();
    },

    async consultarPorId(id) {
        return await Contato.findById(id);
    },

    async atualizarPorId(id, nome, email, telefone) {
        return await Contato.updateOne({ _id: id }, { nome, email, telefone });
    },

    async deletarPorId(id) {
        return await Contato.deleteOne({ _id: id });
    }
} 