var moment = require('moment');
moment().format();

const chalk = require('chalk');

console.log(chalk.cyan('Hello world!'));

var data = 'Jul 18 2017 20:14:56 GMT-0600 (PST)';
console.log(moment(new Date(data)).format("[It is] dddd, MMMM Do YYYY, h:mm:ss a"));
