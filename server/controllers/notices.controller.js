'use strict';

const Notice = require('../models/notice');

const getAll = async ctx => {
  ctx.body = await Notice.find();
}

const addNotice = async ctx => {
  try {
    await Notice.create({
      admRefId: ctx.request.body.admRefId,
      administration: ctx.request.body.administration,
      freqAssign: ctx.request.body.freqAssign
    })
    ctx.status = 200;
  } catch (err) {
    ctx.status = 400;
    ctx.body = err.message;
  }

}

const updateStage = ctx => {

}

const updateFragment = ctx => {

}

module.exports = {
  getAll,
  addNotice,
  updateStage,
  updateFragment
}