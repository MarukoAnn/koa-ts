import homeRouter from './home';
// import * as Router from "koa-router"
// import jwt = require("koa-jwt")
// const secret = 'moyufed-test';
// const router = new Router();


export default function appRouters(app: any){
    app.use(homeRouter.routes(), homeRouter.allowedMethods())
}
