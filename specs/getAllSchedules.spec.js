'use strict';

describe('When use getAllSchedules function', () => {
  const getAllSchedules = require('../utils/getAllSchedules');
  const {employeesSchedules} =  require('./fixtures/employeesSchedules');

  it('Should format the schedules per employee', async () => {
    const allShedules = getAllSchedules(employeesSchedules);

    expect(allShedules[0]).toEqual({employee: 'ASTRID', day: 'MO', startTime: '10:00', endTime: '12:00'});
    expect(allShedules[1]).toEqual({employee: 'ASTRID', day: 'TH', startTime: '12:00', endTime: '14:00'});
    expect(allShedules[2]).toEqual({employee: 'ASTRID', day: 'SU', startTime: '20:00', endTime: '21:00'});

    expect(allShedules[3]).toEqual({employee: 'BARBARA', day: 'MO', startTime: '10:00', endTime: '12:00'});
    expect(allShedules[4]).toEqual({employee: 'BARBARA', day: 'TH', startTime: '01:00', endTime: '03:00'});
    expect(allShedules[5]).toEqual({employee: 'BARBARA', day: 'SU', startTime: '20:00', endTime: '21:00'});
  });
});