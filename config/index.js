var configValues = require('./config');

module.exports = {
  getDbConnectionString: function(){
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds031895.mlab.com:31895/lbnodetodosample';
  }
}