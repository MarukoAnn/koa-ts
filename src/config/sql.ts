// const mysql = require('mysql');
import * as mysql from 'mysql';
import { createConnection} from 'typeorm';
const cennetMySql = async () => {
    await createConnection(
        {
        type: "mysql",
        host: "124.220.193.224",
        port: 3306,
        username: "root",
        password: "Mysql@1234",
        database: "admin",
        entities: [User],
        synchronize: true,
        logging: false
    }
    );
}

export default cennetMySql