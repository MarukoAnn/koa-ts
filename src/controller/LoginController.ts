import LoginService from '../service/LoginService'
import { ResponseMsg } from '../utils/utils'
import Auth from '../middlewares/Auth'
let auth = new Auth()
export default class LoginController {
  private service: LoginService = new LoginService()
  public login = async (ctx: any) => {
    let userInfo = await this.service.login(ctx.request.body.username)
    if (userInfo && userInfo.password === ctx.request.body.password) {
      let data = ResponseMsg<any>(200, '请求成功', {
        token: auth.sign(ctx, ctx.request.body),
      })
      ctx.body = data
    } else if (userInfo.password != ctx.request.body.password) {
      let data = ResponseMsg<string>(200, '用户名密码错误', null)
      ctx.body = data
    } else {
      let data = ResponseMsg<string>(200, '用户名不存在', null)
      ctx.body = data
    }
  }
  public test = (ctx: any) => {
    ctx.body = ResponseMsg<string>(200, '测试一下', null)
  }
}
