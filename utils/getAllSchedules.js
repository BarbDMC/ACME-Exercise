'use strict';

module.exports = (employeesSchedules) => {  
  const employees = Object.keys(employeesSchedules);

  const allSchedules = employees.map((employee) => {
    const employeeSchedule = employeesSchedules[employee];
    const days = Object.keys(employeeSchedule);
    const checkIns = days.map((day) => {
      const { startTime, endTime } = employeeSchedule[day];
      return {
        employee,
        day,
        startTime,
        endTime,
      };
    });
    return checkIns;
  })
  .flat(2);

  return allSchedules;
};
