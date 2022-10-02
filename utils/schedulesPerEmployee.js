'use strict';

module.exports = (file) => {  
  const employeesSchedules = {};

  const splitSpaces = file.split('\n');
  let splitPerName = splitSpaces.map((text) => {
      return text.split('=');
  }).flat();
    
  splitPerName.reduce((previousValue, currentValue, index) => {
    if (index % 2 !== 0) {
      const days = currentValue.match(/([A-Z]{2})/g);
      const hours = currentValue.match(/([0-1]?[0-9]|2[0-3]):[0-5][0-9]/g);
      const daysHours = {}

      days.forEach((day, index) => {
          daysHours[day] = {}
          if (index === 0) {
              daysHours[day]['startTime'] = hours[0]
              daysHours[day]['endTime'] = hours[1]
          }
          
          if (index > 0) {
              const startTimePosition = index * 2;
              const endTimePosition = (index * 2) + 1;
              daysHours[day]['startTime'] = hours[startTimePosition]
              daysHours[day]['endTime'] = hours[endTimePosition]
          }
          
      });
              
      employeesSchedules[previousValue] = daysHours;
    }
        
      return currentValue;
  });

  return employeesSchedules;
};