const readFile = require('./utils/readFile'); 
const schedulesPerEmployee = require('./utils/schedulesPerEmployee');   

module.exports = async () => {   
  const fileReaded = await readFile('../data.txt');
  const employeesSchedules = schedulesPerEmployee(fileReaded);
  
  };