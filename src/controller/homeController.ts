import Auth from '../middlewares/Auth'
import HomeService from '../service/HomeService'
import { ResponseMsg, parseTokenInfo } from '../utils/utils'
const auth = new Auth()
export default class HelloController {
  private service: HomeService = new HomeService()
  public hello = async (ctx: any) => {
    console.log('cookies', ctx.cookies.get('token'))
    // console.log(ctx.request.header['authorization'], 'authorization')
    let info = auth.verify(parseTokenInfo(ctx.request.header['authorization']))
    // if(info['username'] == 'admin') {
    console.log('123')
    // }
    let data = {
      code: 200,
      msg: '请求成功',
      data: info,
    }
    ctx.body = data
  }
}
