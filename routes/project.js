const router = require('express').Router();
const ProjectController = require('../controllers/project');
const ProjectUserController = require('../controllers/projectUser');
const cardRouter = require('../routes/card');
const { kanbanAuthorization, projectAuthorization } = require('../middlewares/authorization');

router.get('/', ProjectController.getUserProject);
router.post('/', ProjectController.create);

router.get('/:id(\\d+)/kanban', kanbanAuthorization, ProjectController.getKanban);

router.use('/:id(\\d+)', projectAuthorization);

router.put('/:id(\\d+)', ProjectController.update);
router.put('/:id(\\d+)/leader/:projectLeader', ProjectController.setLeader);
router.delete('/:id(\\d+)', ProjectController.delete);

router.post('/:id(\\d+)/participants/:UserId', ProjectUserController.invite);
router.delete('/:id(\\d+)/participants/:UserId', ProjectUserController.remove);

module.exports = router;