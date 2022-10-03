'use strict';

describe('When use checkEmployeesTimeMatches function', () => {
  const {employeesSchedules} =  require('./fixtures/employeesSchedules');
  const checkEmployeesTimeMatches = require('../utils/checkEmployeesTimeMatches');

  it('Should return an array of employees which their schedule matches', () => {
    const matchResults = checkEmployeesTimeMatches('MO', '10:00', '12:00', employeesSchedules);
    
    expect(matchResults[0]).toBe('ASTRID');
    expect(matchResults[1]).toBe('BARBARA');
  });
});