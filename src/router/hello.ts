import * as Router from "koa-router"
import homeController from '../controller/homeController'
const helloRouter = new Router();

helloRouter.get('/',  new homeController().hello)

export default helloRouter;