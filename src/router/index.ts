import helloRouter from './hello' 

export default function appRouters(app: any){
    app.use(helloRouter.routes(), helloRouter.allowedMethods())
}
