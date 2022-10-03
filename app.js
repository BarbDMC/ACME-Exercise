const countEmployeesCoincided = require('./utils/countEmployeesCoincided');

const employeesCoincidences = countEmployeesCoincided(__dirname + '/data.txt');

console.log('employeesCoincidences: ', employeesCoincidences);
