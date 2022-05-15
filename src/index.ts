import * as Koa from "koa"
import * as bodyParser from 'koa-bodyparser';
import { PORT } from './config/config';
import appRouters  from './router'
import cennetMySql from './config/sql'
import  *  as  jwt  from  'koa-jwt'
import {errorHandle} from "./middlewares/checkToken";
const secret = 'secret';
const app = new Koa();
import logger = require('koa-logger')
app.use(errorHandle)
app.use(bodyParser());
app.use(jwt({secret}).unless({
    path: [/^\/api\/login/]
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

function isRevoked(arg0: { secret: string; }, isRevoked: any, verify: (ctx: any, decodedToken: string, token: string) => boolean): Koa.Middleware<Koa.DefaultState, Koa.DefaultContext, any> {
    throw new Error("Function not implemented.");
}
