describe('When use readFile function', () => {
  const readFile = require('../utils/readFile');  

  it('Should read file and return the result', async () => {
    const file = await readFile();
    const expectedText = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00  \nASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00  \nANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`
    
    expect(file).toBe(expectedText);
  });
  });