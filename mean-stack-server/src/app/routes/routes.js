const router = require('express').Router();
const homeRouter = require('./homeRouter');
const contatoRouter = require('./contatoRouter');

router.use('/', homeRouter);
router.use('/contatos', contatoRouter);

router.use('/api/v1', router);

module.exports = router;