const readFile = require('./utils/readFile'); 
const schedulesPerEmployee = require('./utils/schedulesPerEmployee');
const getAllSchedules = require('./utils/getAllSchedules');

module.exports = async (path) => { 
  let coincidences = {};
  const fileReaded = await readFile(path);
  const employeesSchedules = schedulesPerEmployee(fileReaded);
  const allSchedules = getAllSchedules(employeesSchedules);
  
  allSchedules.forEach((schedule) => {
    const employees = Object.keys(employeesSchedules);

    const employeesCoincided = employees.filter(employee => {
      const employeeSchedule = employeesSchedules[employee];
      const employeeDay = employeeSchedule[schedule.day];

      if (employeeDay) {
        const { startTime, endTime } = employeeDay;

        return startTime === schedule.startTime
        && endTime === schedule.endTime;
      }

      return false;
    });
    
    if (employeesCoincided.length > 1) {
      if (coincidences[`${employeesCoincided[0]}-${employeesCoincided[1]}`]) {
        coincidences[`${employeesCoincided[0]}-${employeesCoincided[1]}`] += 0.5;
      }

      if (!coincidences[`${employeesCoincided[0]}-${employeesCoincided[1]}`]) {
        coincidences[`${employeesCoincided[0]}-${employeesCoincided[1]}`] = 0.5;
      }
    }
  });

  const allCoincidences = Object.keys(coincidences).map(coincidence => {
    return `${coincidence}: ${coincidences[coincidence]}`;
  });

  console.log('allCoincidences', allCoincidences);
  return allCoincidences;
};