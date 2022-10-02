describe('When use formatEmployeesData function', () => {
  const schedulesPerEmployee = require('../utils/schedulesPerEmployee');  

  it('Should format the employees data', async () => {
    const readedFile = `ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00 \nBARBARA=MO10:00-12:00,TH01:00-03:00,SU20:00-21:00`;
    const employeesShedules = schedulesPerEmployee(readedFile);

    expect(employeesShedules.ASTRID.MO).toEqual({start_time: '10:00', end_time: '12:00' });
    expect(employeesShedules.ASTRID.TH).toEqual({start_time: '12:00', end_time: '14:00' });
    expect(employeesShedules.ASTRID.SU).toEqual({start_time: '20:00', end_time: '21:00' });
    
    expect(employeesShedules.BARBARA.MO).toEqual({start_time: '10:00', end_time: '12:00' });
    expect(employeesShedules.BARBARA.TH).toEqual({start_time: '01:00', end_time: '03:00' });
    expect(employeesShedules.BARBARA.SU).toEqual({start_time: '20:00', end_time: '21:00' });
  });
});
