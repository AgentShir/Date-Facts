var moment = require('moment');
moment().format();

const chalk = require('chalk');

console.log('It is ' + chalk.blue.bold(moment(new Date()).format("dddd, MMMM Do YYYY, h:mm:ss a")));

console.log('It is the ' + chalk.magenta.bold(moment(new Date()).format("DDDo")) + ' day of the year.');

let currentTime = moment(new Date());
let midnight = moment(new Date()).startOf('day');
let result = currentTime.diff(midnight, 'seconds');


console.log('It is ' + chalk.cyan.bold(result) + ' seconds into the day.');

let isDST = '';
if (moment(new Date()).isDST()) {
  isDST = 'is';
} else {
  isDST = 'is not';
}

console.log('It ' + chalk.green.bold(isDST) + ' during Daylight Savings Time.');

let isLeapYear = '';
if (moment(new Date()).isLeapYear()) {
  isLeapYear = 'is';
} else {
  isLeapYear = 'is not';
}

console.log('It ' + chalk.red.bold(isLeapYear) + ' not a leap year.');
