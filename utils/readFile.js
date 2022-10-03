'use strict';

const fs = require('fs');

module.exports = (pathFile) => {  
  const fileReaded = fs.readFileSync(pathFile, 'utf-8', (err, data) => {
    if (err) throw err;
  });
  
  return fileReaded;
};
