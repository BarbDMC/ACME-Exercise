'use strict';

describe('When use countEmployeesCoincided function', () => {
  const countEmployeesCoincided = require('../countEmployeesCoincided');  

  it('Should format the employees data', () => {
    const employeesResults = countEmployeesCoincided();
    
    expect(employeesResults[0]).toBe('ASTRID-BARBARA: 2');
  });
});
