import homeRouter from './home';

export default function appRouters(app: any){
    app.use(homeRouter.routes(), homeRouter.allowedMethods())
}
