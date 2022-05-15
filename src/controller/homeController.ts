
import Auth from '../middlewares/Auth'
import HomeService from '../service/HomeService'
const auth = new Auth();
export default class HelloController {
    private service: HomeService = new HomeService();
    public login = async (ctx: any) => {
        let userInfo = await this.service.hello();
        console.log('userInfo', userInfo)
        console.log(ctx.request.body)
        if(ctx.request.body.username == userInfo.username && ctx.request.body.password === userInfo.password) {
            let data = {
                code: 200,
                msg: '请求成功',
                token: auth.sign(ctx, ctx.request.body)
            }
            ctx.body = data;
        }else {
            ctx.body = {
                code: 500,
                msg: '用户名密码错误'
            }
        }
    };
    public hello = async (ctx: any) => {
        console.log(this, 'this')
        let data = {
            code: 200,
            msg: '请求成功',
            data:  await this.service.hello(),
        }
        ctx.body = data;
    }
}