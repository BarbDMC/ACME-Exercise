const readFile = require('./utils/readFile'); 
const formatEmployeesData = require('./utils/formatEmployeesData');   

module.exports = () => {   
  const fileReaded = readFile();
  const employeesSchedules = formatEmployeesData(fileReaded);
  
  console.log('employeesSchedules', employeesSchedules)
  
    for (const employee in employeesSchedules) {
      for (const day in employeesSchedules[employee]) {
        console.log('employeesSchedules[employee][day]', employeesSchedules[employee][day])
      }
      
    }
   
    
  };