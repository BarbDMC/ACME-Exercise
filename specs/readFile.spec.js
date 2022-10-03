'use strict';

describe('When use readFile function', () => {
  const fs = require('fs');
  const readFile = require('../utils/readFile');  

  it('Should read file and return the text in a string', () => {
    jest.spyOn(fs, 'readFileSync');

    const file = readFile(__dirname + '/fixtures/data.txt');
    const expectedText = `ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00 \nBARBARA=MO10:00-12:00,TH01:00-03:00,SU20:00-21:00`
    
    expect(fs.readFileSync).toHaveBeenCalled();
    expect(file).toBe(expectedText);
  });

  it('Should throw error if cannot read the file', () => {
    try {
      readFile(__dirname + '/wrongPath');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
