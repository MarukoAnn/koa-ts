import * as Koa from "koa"
import * as Router from "koa-router"
import * as bodyParser from 'koa-bodyparser';
import { PORT } from './config';
import appRouters  from './router'
const app = new Koa();
const router = new Router();

appRouters(app);
app.use(bodyParser());

app.listen(PORT)

console.log('Server running on port 5000')