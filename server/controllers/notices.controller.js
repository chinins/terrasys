'use strict';

const Notice = require('../models/notice');
const Message = require('../models/message');

const getAll = async ctx => {
  ctx.body = await Notice.find();
}

const getMessages = async ctx => {
  ctx.body = await Message.find();
}

const postNotice = async ctx => {
  try {
    await Notice.create({
      admRefId: ctx.request.body.admRefId,
      administration: ctx.request.body.administration,
      freqAssign: ctx.request.body.freqAssign
    });
    ctx.status = 200;
  } catch (err) {
    ctx.throw(400, err.message);
  }
}

const postMessage = async ctx => {
  try {
    await Message.create({
      title: ctx.request.body.title
    });
    ctx.status = 200;
  } catch (err) {
    ctx.throw(400, err.message);
  }
}

const validateNotice = async ctx => {
  try {
    await Notice.findOneAndUpdate(
      ctx.params.id, {
      validation: 'Pass'
    }, {
      new: true
    })
    ctx.status = 200;
  } catch (err) {
    ctx.throw(400, err.message)
  }
}

const publishNotice = async ctx => {
  try {
    await Notice.findByIdAndUpdate(ctx.params.id, {
      published: true
    }, {
      new: true
    })
    ctx.status = 200;
  } catch (err) {
    ctx.throw(400, err.message);
  }
}

module.exports = {
  getAll,
  getMessages,
  postNotice,
  postMessage,
  validateNotice,
  publishNotice
}