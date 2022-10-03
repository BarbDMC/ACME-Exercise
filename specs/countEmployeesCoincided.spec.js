'use strict';

describe('When use countEmployeesCoincided function', () => {
  const countEmployeesCoincided = require('../countEmployeesCoincided');  

  it('Should format and return the number of coincidences', async () => {
    const employeesResults = await countEmployeesCoincided('../specs/fixtures/data.txt');
    
    expect(employeesResults[0]).toBe('ASTRID-BARBARA: 2');
  });
});
