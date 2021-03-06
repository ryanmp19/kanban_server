const router = require('express').Router();
const UserController = require('../controllers/user');
const { userAuthorization } = require('../middlewares/authorization');

router.use('/:id(\\d+)', userAuthorization);
router.put('/:id(\\d+)', UserController.update);
router.get('/', UserController.getUser);

module.exports = router