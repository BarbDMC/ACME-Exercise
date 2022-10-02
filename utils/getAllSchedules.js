'use strict';

module.exports = (employeesSchedules) => {  
  const employees = Object.keys(employeesSchedules);

  const allSchedules = employees.map((employee) => {
    const employeeSchedule = employeesSchedules[employee];
    const days = Object.keys(employeeSchedule);
    const checkIns = days.map((day) => {
      const { start_time, end_time } = employeeSchedule[day];
      return {
        employee,
        day,
        start_time,
        end_time,
      };
    });
    return checkIns;
  })
  .flat(2);

  return allSchedules;
};
