describe('When use formatEmployeesData function', () => {
  const countEmployeesCoincided = require('../countEmployeesCoincided');  

  it('Should format the employees data', () => {
    const employeesResults = countEmployeesCoincided();
    
    expect(employeesResults[0]).toBe('ASTRID-RENE: 2');
    expect(employeesResults[1]).toBe('ASTRID-ANDRES: 3');
    expect(employeesResults[2]).toBe('RENE-ANDRES: 2');
  });
});
