const router = require('express').Router();
const controller = require('../controllers/contatoController');

router.post('/', controller.adicionar);
router.get('/', controller.consultar);
router.get('/:id', controller.consultarPorId);
router.put('/:id', controller.atualizarPorId);
router.delete('/:id', controller.deletarPorId);

module.exports = router;