
import HomeService from '../service/HomeService'
export default class HelloController {
    private service: HomeService = new HomeService();
    hello = (ctx: any): void => {
        ctx.body = this.service.hello();
    }
    
}