'use strict';

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const db = require('./db');

const router = require('./router');

app.use(bodyParser());
app.use(router.routes());

const port = 3003;

app.listen(port, () => console.log(`Server listening on localhost:${port}`));