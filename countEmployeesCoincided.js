const readFile = require('./utils/readFile'); 
const schedulesPerEmployee = require('./utils/schedulesPerEmployee');
const getAllSchedules = require('./utils/getAllSchedules');

module.exports = async (path) => {   
  const fileReaded = await readFile(path);
  const employeesSchedules = schedulesPerEmployee(fileReaded);
  const allSchedules = getAllSchedules(employeesSchedules);

  allSchedules.forEach((schedule) => {
    const employees = Object.keys(employeesSchedules);
    const coincidences = employees.filter(employee => {
      const employeeSchedule = employeesSchedules[schedule.employee];
      const employeeDay = employeeSchedule[schedule.day];
      if (employeeDay) {
        const { start_time, end_time } = employeeDay;
        return start_time === schedule.startTime
          && end_time === schedule.endTime;
      }
      return false;
    });
    return coincidences;
  });
  
  };