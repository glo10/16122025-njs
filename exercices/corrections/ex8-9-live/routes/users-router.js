var express = require('express');
const { checkLogin, protectedDefunkt } = require('../middlewares/users');
const { findAll, findOne } = require('../controllers/users-controller');
var router = express.Router();
/* GET users listing. */
router.get('/', findAll);
// suite des middlewares
router.get('/:login', checkLogin, protectedDefunkt, findOne)

module.exports = router;
