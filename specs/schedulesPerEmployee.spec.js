'use strict';

describe('When use formatEmployeesData function', () => {
  const schedulesPerEmployee = require('../utils/schedulesPerEmployee');  

  it('Should format the employees data', () => {
    const readedFile = `ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00 \nBARBARA=MO10:00-12:00,TH01:00-03:00,SU20:00-21:00`;
    const employeesShedules = schedulesPerEmployee(readedFile);

    expect(employeesShedules.ASTRID.MO).toEqual({startTime: '10:00', endTime: '12:00' });
    expect(employeesShedules.ASTRID.TH).toEqual({startTime: '12:00', endTime: '14:00' });
    expect(employeesShedules.ASTRID.SU).toEqual({startTime: '20:00', endTime: '21:00' });
    
    expect(employeesShedules.BARBARA.MO).toEqual({startTime: '10:00', endTime: '12:00' });
    expect(employeesShedules.BARBARA.TH).toEqual({startTime: '01:00', endTime: '03:00' });
    expect(employeesShedules.BARBARA.SU).toEqual({startTime: '20:00', endTime: '21:00' });
  });
});
