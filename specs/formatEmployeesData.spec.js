describe('When use formatEmployeesData function', () => {
  const readFile = require('../utils/readFile'); 
  const formatEmployeesData = require('../utils/formatEmployeesData');  

  it('Should format the employees data', async () => {
    const file = await readFile();
    const employeesData = formatEmployeesData(file);
    
    expect(employeesData.RENE.MO).toEqual({start_time: '10:00', end_time: '12:00' });
    expect(employeesData.RENE.TU).toEqual({start_time: '10:00', end_time: '12:00' });
    expect(employeesData.RENE.TH).toEqual({start_time: '01:00', end_time: '03:00' });
    expect(employeesData.RENE.SA).toEqual({start_time: '14:00', end_time: '18:00' });
    expect(employeesData.RENE.SU).toEqual({start_time: '20:00', end_time: '21:00' });

    expect(employeesData.ASTRID.MO).toEqual({start_time: '10:00', end_time: '12:00' });
    expect(employeesData.ASTRID.TH).toEqual({start_time: '12:00', end_time: '14:00' });
    expect(employeesData.ASTRID.SU).toEqual({start_time: '20:00', end_time: '21:00' });
    
    expect(employeesData.ANDRES.MO).toEqual({start_time: '10:00', end_time: '12:00' });
    expect(employeesData.ANDRES.TH).toEqual({start_time: '12:00', end_time: '14:00' });
    expect(employeesData.ANDRES.SU).toEqual({start_time: '20:00', end_time: '21:00' });
  });
});
