import helloRouter from './hello';
import * as Router from "koa-router"
// import jwt = require("koa-jwt")
// const secret = 'moyufed-test';
// const router = new Router();


export default function appRouters(app: any){
    app.use(helloRouter.routes(), helloRouter.allowedMethods())
}
