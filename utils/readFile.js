const fs = require('fs');

module.exports = async () => {  
  const fileReaded = await fs.readFileSync('./data.txt', 'utf-8', (err, data) => {
    if (err) throw err;
  });
  
  return fileReaded;
};
