'use strict';

const Notice = require('../models/notice');

const getAll = ctx => {
  console.log('got here');
  Notice.find()
    .then(notices => {
      console.log('got here too');
      ctx.body = [];
    })
}

const getNotice = ctx => {

}

const addNotice = ctx => {

}

const updateStage = ctx => {

}

const updateFragment = ctx => {

}

module.exports = {
  getAll,
  getNotice,
  addNotice,
  updateStage,
  updateFragment
}