const noticeArray = [];
const messageArray = [];

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

const mes1 = {
  _id: 1,
  title: 'Notice admRefId 111 was published to Blockchain',
  dateTime: '2018-09-10T12:57:55.128Z'
}

const mes2 = {
  _id: 2,
  title: 'Notice admRefId 222 was published to Blockchain',
  dateTime: '2018-09-10T13:57:55.128Z'
}

messageArray.push(mes1);
messageArray.push(mes2);

module.exports = {
  noticeArray,
  messageArray
};