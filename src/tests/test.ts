const mysql = require("../index")
const logger = require('nexo-npm-node-logger')

mysql.credentials('admin', 'admin')
mysql.schema('mydb')
mysql.url('127.0.0.1')
mysql.onConnected(async () => {
    logger.i("Connected to the database");
});
mysql.onFailure((err:any) => {
    logger.e("Unable to connect to the database", err)
});
mysql.initialize()
mysql.client('users').select('*')
.then((result:any)=> console.log(result))
.catch((error:any) =>  logger.e(error))
.finally(()=> process.exit())