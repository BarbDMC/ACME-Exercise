'use strict';

const readFile = require('./utils/readFile'); 
const schedulesPerEmployee = require('./utils/schedulesPerEmployee');
const getAllSchedules = require('./utils/getAllSchedules');
const checkEmployeesTimeMatches = require('./utils/checkEmployeesTimeMatches');

module.exports = async (path) => { 
  const matches = {};
  const fileReaded = await readFile(path);
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
  
  console.log('allMatches', allMatches);

  return allMatches;
};