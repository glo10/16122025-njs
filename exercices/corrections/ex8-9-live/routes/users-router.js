var express = require('express');
const { checkLogin, banDefunkt } = require('../middlewares/users');
const { findAll, findOne } = require('../controllers/users-controller');
var router = express.Router();
/* GET users listing. */
// appel de notre middleware juste la route avec le login
// router.param(checkLogin)
router.use(banDefunkt)
router.get('/', findAll);
router.get('/:login', findOne)

module.exports = router;
