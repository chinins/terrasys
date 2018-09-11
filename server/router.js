'use strict';

const Router = require('koa-router');
const router = new Router()

const NoticesController = require('./controllers/notices.controller.js');

router.get('/dashboard', NoticesController.getAll);
router.post('/add', NoticesController.addNotice);
router.put('/dashboard/validate/:id', NoticesController.validateNotice);
router.put('/dashboard/publish/:id', NoticesController.publishNotice);
router.get('/', NoticesController.getAll);

module.exports = router;