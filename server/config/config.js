var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/multivision',
    rootPath: rootPath,
    port: process.env.port || 3030
  },
  production: {
    db: 'mongodb://michael:multivision@ds035553.mongolab.com:35553/multivision',
    rootPath: rootPath,
    port: process.env.port || 80
  }
};
