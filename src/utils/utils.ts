import {ResponseData} from '../models/utils'
import  *  as  jwt  from  'koa-jwt'
export function ResponseMsg<T>(code: number, msg: string, data: T): ResponseData<T> {
    let responseData = {
        code: code,
        msg: msg,
        data: data
    }
    return responseData
}


export function parseTokenInfo(token: string){
    let data = token.trim().split(' ');
    if (data.length === 2) {
        const scheme = data[0];
        const credentials = data[1];
        if (/^Bearer$/i.test(scheme)) { // 判断 authorization 请求头是不是以 Bearer 开头
            console.log(credentials, 'credentials');
            return credentials; // 返回 token
        }
    }
}