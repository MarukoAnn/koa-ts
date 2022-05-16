import sql from '../config/sql'
import { User } from '../entity/user'
import { getManager } from 'typeorm'
export default class LoginService {
    public hello = async () => {
        const entityManager = getManager().getRepository(User); // 你也可以通过 getConnection().manager 获取
        const user = await entityManager.createQueryBuilder("user").where("user.id = :id", {id: 1}).getOne();
        console.log(user, 'user')
        return user
    };
    public login = async (username: string) => {
        const entityManager = getManager().getRepository(User); // 你也可以通过 getConnection().manager 获取
        const user = await entityManager.createQueryBuilder("user").where("user.username = :id", {id: username}).getOne();
        console.log(user, 'user')
        return user
    }
}