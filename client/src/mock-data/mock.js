const noticeArray = [];

const notice1 = {
  admRefId: '1',
  administration: 'UK',
  freqAssigned: 111,
  validation: 'Unknown',
  published: false,
  date: '2018-09-10T12:37:55.128Z'
}

const notice2 = {
  admRefId: '2',
  administration: 'USA',
  freqAssigned: 222,
  validation: 'Pass',
  published: true,
  date: '2018-09-10T12:37:55.128Z'
}

noticeArray.push(notice1);
noticeArray.push(notice2);

module.exports = noticeArray;