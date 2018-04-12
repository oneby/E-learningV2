'use strict';

module.exports = appInfo => {
  const config = exports = {
    sequelize : {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'elearning',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: '123456',
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523509508086_5913';

  // add your config here
  config.middleware = [];

  return config;

  
};

