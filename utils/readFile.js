const fs = require('fs');
const path = require('path');

module.exports = async (pathFile) => {  
  const filePath = path.join(__dirname, pathFile);
  const fileReaded = await fs.readFileSync(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
  });
  
  return fileReaded;
};
