'use strict';

const Router = require('koa-router');
const router = new Router()

const NoticesController = require('./controllers/notices.controller.js');

router.get('/dashboard', NoticesController.getAll);
router.get('/details/:id', NoticesController.getNotice);
router.post('/add-notice', NoticesController.addNotice);
router.put('/details/:id/:stage', NoticesController.updateStage);
router.put('/details/:id/:fragment', NoticesController.updateFragment);
router.get('/', NoticesController.getAll);

module.exports = router;