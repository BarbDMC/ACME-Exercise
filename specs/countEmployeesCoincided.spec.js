'use strict';

describe('When use countEmployeesCoincided function', () => {
  const countEmployeesCoincided = require('../utils/countEmployeesCoincided');  

  it('Should format and return the number of coincidences', () => {
    const employeesResults = countEmployeesCoincided(__dirname + '/fixtures/data.txt');
    
    expect(employeesResults[0]).toBe('ASTRID-BARBARA: 2');
  });
});
