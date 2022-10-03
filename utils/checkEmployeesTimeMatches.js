'use strict';

module.exports = (day, timeStart, timeEnd, employeesSchedules) => { 
  const employees = Object.keys(employeesSchedules);

  const coincidences = employees.filter((employee) => {
    const employeeSchedule = employeesSchedules[employee];
    const employeeDay = employeeSchedule[day];

    if (employeeDay) {
      const { startTime, endTime } = employeeDay;

      const employeeStartDate = new Date(`2021-01-01 ${startTime}`).getTime();
      const employeeEndDate = new Date(`2021-01-01 ${endTime}`).getTime();

      const checkinStartDate = new Date(`2021-01-01 ${timeStart}`).getTime();
      const checkinEndDate = new Date(`2021-01-01 ${timeEnd}`).getTime();

      const equalCheckinTime = employeeStartDate === checkinStartDate && employeeEndDate === checkinEndDate;
      const betweenCheckinTime = checkinStartDate <= employeeStartDate && checkinEndDate >= employeeStartDate;
      const betweenEmployeeTime = employeeStartDate <= checkinStartDate && employeeEndDate >= checkinStartDate;


      return equalCheckinTime || betweenCheckinTime || betweenEmployeeTime ? true : false;
    }
    return false;
  });

  return coincidences;
};
