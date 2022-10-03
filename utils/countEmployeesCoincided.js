'use strict';

const readFile = require('./readFile'); 
const schedulesPerEmployee = require('./schedulesPerEmployee');
const getAllSchedules = require('./getAllSchedules');
const checkEmployeesTimeMatches = require('./checkEmployeesTimeMatches');

module.exports = (path) => { 
  const matches = {};
  const fileReaded = readFile(path);
  const employeesSchedules = schedulesPerEmployee(fileReaded);
  const allSchedules = getAllSchedules(employeesSchedules);
  
  allSchedules.forEach((schedule) => {
    const {employee, day, startTime, endTime } = schedule;
    const coincidences = checkEmployeesTimeMatches(day, startTime, endTime, employeesSchedules);
      
    coincidences.forEach((coincidence) => {
      if (employee === coincidence) return;

      const pairKey = `${employee}-${coincidence}`;

      if (!matches[pairKey]) {
        matches[pairKey] = [];
      }

      matches[pairKey].push(`${day}-${startTime}-${endTime}`);
    });
  });

  const allMatches = Object.keys(matches).map(match => {
    return `${match}: ${matches[match].length}`;
  });
  
  return allMatches;
};