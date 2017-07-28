var moment = require('moment');
moment().format();

var data = 'Thu Dec 29 2011 20:14:56 GMT-0600 (PST)';
console.log(moment(new Date(data)).format("DD-MMM-YYYY"))
