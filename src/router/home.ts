import * as Router from "koa-router"
import homeController from '../controller/homeController'
import LoginController from '../controller/LoginController'
const homeRouter = new Router({
    prefix: '/api'
});

homeRouter.post('/hello',  new homeController().hello)
homeRouter.post('/login',  new LoginController().login)
export default homeRouter;