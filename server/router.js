'use strict';

const Router = require('koa-router');
const router = new Router()

const NoticesController = require('./controllers/notices.controller.js');

router.get('/dashboard', NoticesController.getAll);
router.post('/add', NoticesController.addNotice);
router.put('/details/:id/:stage', NoticesController.updateStage);
router.put('/details/:id/:fragment', NoticesController.updateFragment);
router.get('/', NoticesController.getAll);

module.exports = router;