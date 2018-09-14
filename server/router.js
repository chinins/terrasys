'use strict';

const Router = require('koa-router');
const router = new Router()

const NoticesController = require('./controllers/notices.controller.js');

router.get('/dashboard', NoticesController.getAll);
router.get('/messages', NoticesController.getMessages);
router.post('/', NoticesController.postNotice);
router.post('/messages', NoticesController.postMessage);
router.put('/dashboard/validate/:id', NoticesController.validateNotice);
router.put('/dashboard/publish/:id', NoticesController.publishNotice);
router.get('/', NoticesController.getAll);

module.exports = router;