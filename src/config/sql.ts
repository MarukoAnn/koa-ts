// const mysql = require('mysql');
import { DataSource } from 'typeorm';
import {TYPEORM_HOST, TYPEORM_USERNAME, TYPEORM_PASSWORD, TYPEORM_DATABASE} from './config'
import path = require('path');
const cennetMySql =   new DataSource(
    {
        type: "mysql",
        host: TYPEORM_HOST,
        port: 3306,
        username: TYPEORM_USERNAME,
        password: TYPEORM_PASSWORD,
        database: TYPEORM_DATABASE,
        entities: [path.join(__dirname, '../', '/entity/*{.js,.ts}')],
        synchronize: true,
        logging: false
    }
);

export default cennetMySql