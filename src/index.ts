import * as Koa from "koa"
import * as bodyParser from 'koa-bodyparser';
import  *  as  jwt  from  'koa-jwt'
import * as logger from 'koa-logger'
const cors  = require('@koa/cors')
import { PORT } from './config/config';
import appRouters  from './router'
import cennetMySql from './config/sql'
import {errorHandle} from "./middlewares/errorHandle";
const secret = 'secret';
const app = new Koa();
app.use(cors())
app.use(errorHandle)
app.use(bodyParser());
app.use(jwt({secret}).unless({
    path: [/^\/api\/login/, /^\/api\/test/]
}))
// 添加路由
appRouters(app);
// 创建数据库链接
cennetMySql().then(() => {
    console.log('数据库连接成功')
}).catch(() => {
    console.log('数据库连接失败')
});
app.use(logger((str, args) => {
    console.log('str', str)
}))
app.listen(PORT)

console.log(`Server running on port ${PORT}`)