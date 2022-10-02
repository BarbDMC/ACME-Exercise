'use strict';

describe('When use getAllSchedules function', () => {
  const getAllSchedules = require('../utils/getAllSchedules');
  const {employeesSchedules} =  require('./fixtures/employeesSchedules')

  it('Should format the employees data', async () => {
    const allShedules = getAllSchedules(employeesSchedules);

    expect(allShedules[0]).toEqual({employee: 'ASTRID', day: 'MO', start_time: '10:00', end_time: '12:00'});
    expect(allShedules[1]).toEqual({employee: 'ASTRID', day: 'TH', start_time: '12:00', end_time: '14:00'});
    expect(allShedules[2]).toEqual({employee: 'ASTRID', day: 'SU', start_time: '20:00', end_time: '21:00'});

    expect(allShedules[3]).toEqual({employee: 'BARBARA', day: 'MO', start_time: '10:00', end_time: '12:00'});
    expect(allShedules[4]).toEqual({employee: 'BARBARA', day: 'TH', start_time: '01:00', end_time: '03:00'});
    expect(allShedules[5]).toEqual({employee: 'BARBARA', day: 'SU', start_time: '20:00', end_time: '21:00'});
  });
});