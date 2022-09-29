describe('When use readFile function', () => {
    const readFile = require('../readFile');  
  
    it('Should read file and count times of employees have coincided in the office correctly', () => {
      const results = readFile();
      
      expect(results[0]).toBe('ASTRID-RENE: 2');
      expect(results[1]).toBe('ASTRID-ANDRES: 3');
      expect(results[2]).toBe('RENE-ANDRES: 2');
    });
  });