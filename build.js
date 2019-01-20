const pug = require('pug');
const data = require('./main.json');
const moment = require('moment');
data.birth_date = moment(data.birth_date).format('MMMM Do YYYY');
data._ = {
  marked: require('marked'),
};
process.stdout.write(pug.renderFile('cv.pug', data));
