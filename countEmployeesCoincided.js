const readFile = require('./utils/readFile'); 
const formatEmployeesData = require('./utils/schedulesPerEmployee');   

module.exports = async () => {   
  const fileReaded = await readFile('./data.txt');
  const employeesSchedules = formatEmployeesData(fileReaded);
  
  const checkEmployeesTimeMatches = (day, time_start, time_end) => {
    const employees = Object.keys(employeesSchedules);
    const coincidences = employees.filter((employee) => {
      const employeeSchedule = employeesSchedules[employee];
      const employeeDay = employeeSchedule[day];
      if (employeeDay) {
        const { start_time, end_time } = employeeDay;
        return start_time === time_start && end_time === time_end;
      }
      return false;
    });
    return coincidences;
  };
    
  };